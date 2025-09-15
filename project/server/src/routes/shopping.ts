import { Router } from 'express';
import MealPlan from '../models/MealPlan.js';

const router = Router();

// Brand-agnostic shopping list from plan items
router.post('/', async (req, res) => {
  const { planId } = req.body as { planId: string };
  const plan = await MealPlan.findById(planId);
  if (!plan) return res.status(404).json({ error: 'Plan not found' });

  const tally: Record<string, number> = {};
  for (const day of plan.days) {
    for (const item of day.items) {
      tally[item.name] = (tally[item.name] || 0) + item.grams;
    }
  }

  const list = Object.entries(tally).map(([name, grams]) => ({ name, grams: Math.round(grams) }));
  res.json({ items: list });
});

export default router;