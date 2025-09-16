import { Router, Request, Response } from 'express';
import MealPlan from '../models/MealPlan.js';
import PetProfile from '../models/PetProfile.js';
import { generateNarrative } from '../utils/openai.js';

const router = Router();

function isoWeek(date: Date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

function computeDailyPortion(
  species: 'dog'|'cat',
  weightKg: number,
  ageYears: number,
  activity: 'low'|'moderate'|'high'
) {
  // Align with NutritionGuide.tsx logic:
  // RER = 70 * kg^0.75; MER = RER * ageFactor * activityFactor
  const rer = 70 * Math.pow(weightKg, 0.75);

  // Age factor by species
  const isPuppyKitten = ageYears < 1;
  const isSenior = ageYears >= 7;
  const ageFactor = species === 'dog'
    ? (isPuppyKitten ? 3.0 : isSenior ? 1.1 : 1.6)
    : (isPuppyKitten ? 2.5 : isSenior ? 1.0 : 1.2);

  // Activity factor consistent with UI calculator
  const activityFactor = activity === 'high' ? 1.2 : activity === 'low' ? 0.9 : 1.0;

  const kcalDay = rer * ageFactor * activityFactor;

  // Convert kcal -> grams using kcal per cup assumptions in UI and 100g per cup
  const KCAL_PER_CUP = species === 'dog' ? 350 : 300;
  const GRAMS_PER_CUP = 100; // keep in sync with UI assumption
  const kcalPerGram = KCAL_PER_CUP / GRAMS_PER_CUP; // e.g., dog 3.5, cat 3.0

  const gramsDay = Math.round(kcalDay / kcalPerGram);
  return gramsDay;
}

router.post('/generate', async (req: Request, res: Response) => {
  try {
    const { petId, startDateISO } = req.body as { petId: string; startDateISO?: string };
    const pet = await PetProfile.findById(petId);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });

    const start = startDateISO ? new Date(startDateISO) : new Date();
    const week = isoWeek(start);
    const gramsDay = computeDailyPortion(
      pet.species as any,
      pet.weightKg,
      pet.ageYears,
      pet.activityLevel as any
    );

    // Build varied meals per day with week-based deterministic variety
    type Item = { meal: 'breakfast'|'lunch'|'dinner'|'snack'; name: string; grams: number; notes?: string };

    // Create a deterministic seed from week + petId so each week differs
    function seedFrom(str: string) {
      let h = 2166136261 >>> 0; // FNV-1a basis
      for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return h >>> 0;
    }

    function makeRng(seed: number) {
      let s = seed >>> 0;
      return () => {
        // xorshift32
        s ^= s << 13; s >>>= 0;
        s ^= s >> 17; s >>>= 0;
        s ^= s << 5;  s >>>= 0;
        return (s >>> 0) / 4294967296;
      };
    }

    function pick<T>(arr: T[], rnd: () => number, offset = 0): T {
      if (arr.length === 0) throw new Error('No options');
      const idx = Math.floor(rnd() * arr.length + offset) % arr.length;
      return arr[idx];
    }

    // Species-specific options
    const breakfastsAll = pet.species === 'cat'
      ? ['Fish & Pumpkin', 'Chicken & Rice', 'Turkey & Sweet Potato', 'Salmon & Peas', 'Beef & Oats']
      : ['High-protein base', 'Chicken & Rice', 'Beef & Oats', 'Turkey & Sweet Potato', 'Fish & Pumpkin'];
    const dinnersAll = pet.species === 'cat'
      ? ['Balanced mix', 'Salmon & Peas', 'Lean meat & Veg', 'Lamb & Quinoa', 'Grain-free blend']
      : ['Balanced mix', 'Lean meat & Veg', 'Grain-free blend', 'Lamb & Quinoa', 'Salmon & Peas'];

    // Filter options that might match allergens (simple substring match)
    const allergens = (pet.allergies || []).map(a => a.toLowerCase());
    const avoid = (name: string) => allergens.some(a => name.toLowerCase().includes(a));
    const breakfasts = breakfastsAll.filter(n => !avoid(n));
    const dinners = dinnersAll.filter(n => !avoid(n));

    // Fallback to defaults if everything filtered out
    const breakfastsSafe = breakfasts.length ? breakfasts : ['High-protein base'];
    const dinnersSafe = dinners.length ? dinners : ['Balanced mix'];

    const splits: [number, number][] = [
      [0.40, 0.60],
      [0.45, 0.55],
      [0.35, 0.65],
      [0.50, 0.50],
    ];

    const rng = makeRng(seedFrom(`${week}-${String(pet._id)}-${pet.species}`));

    const days: { dateISO: string; items: Item[]; summaryText?: string }[] = Array.from({ length: 7 }).map((_, i) => {
      // advance RNG a bit per day for variety
      rng(); rng();
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const dateISO = d.toISOString().slice(0, 10);

      const split = pick(splits, rng);
      const bName = pick(breakfastsSafe, rng, i);
      let dName = pick(dinnersSafe, rng, i + 1);
      // ensure dinner differs from breakfast if possible
      if (dinnersSafe.length > 1 && dName === bName) {
        dName = pick(dinnersSafe.filter(n => n !== bName), rng);
      }

      const bGrams = Math.round(gramsDay * split[0]);
      const dGrams = Math.round(gramsDay - bGrams);

      const items: Item[] = [
        { meal: 'breakfast', name: bName, grams: bGrams },
        { meal: 'dinner', name: dName, grams: dGrams },
      ];

      return { dateISO, items };
    });

    const allergenNote = pet.allergies?.length ? `Avoid: ${pet.allergies.join(', ')}` : 'No known allergies';
    const prompt = `Write a short, friendly weekly plan summary for a ${pet.ageYears}-year-old ${pet.weightKg}kg ${pet.species} (${pet.breed ?? 'mixed'}) with ${pet.activityLevel} activity. ${allergenNote}. Keep it under 120 words.`;
    const summary = await generateNarrative(prompt);
    days[0].summaryText = summary || undefined;

    const plan = await MealPlan.findOneAndUpdate(
      { petId: pet._id, weekISO: week },
      { $set: { days } },
      { upsert: true, new: true }
    );

    res.json(plan);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/:petId', async (req: Request, res: Response) => {
  const { petId } = req.params;
  const { week } = req.query as { week?: string };
  const plan = await MealPlan.findOne({ petId, ...(week ? { weekISO: String(week) } : {}) });
  if (!plan) return res.status(404).json({ error: 'Plan not found' });
  res.json(plan);
});

export default router;