import { Router } from 'express';
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

router.post('/generate', async (req, res) => {
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

    const baseItems = [
      { meal: 'breakfast' as const, name: 'High-protein base', grams: Math.round(gramsDay * 0.4) },
      { meal: 'dinner' as const, name: 'Balanced mix', grams: Math.round(gramsDay * 0.6) },
    ];

    const days = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const dateISO = d.toISOString().slice(0, 10);
      return { dateISO, items: baseItems };
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

router.get('/:petId', async (req, res) => {
  const { petId } = req.params;
  const { week } = req.query as { week?: string };
  const plan = await MealPlan.findOne({ petId, ...(week ? { weekISO: String(week) } : {}) });
  if (!plan) return res.status(404).json({ error: 'Plan not found' });
  res.json(plan);
});

export default router;