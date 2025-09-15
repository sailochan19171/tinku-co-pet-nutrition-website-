import { Router, Request, Response } from 'express';
import Subscription from '../models/Subscription.js';

const router = Router();

// POST /api/subscriptions
router.post('/', async (req, res) => {
  try {
    const { email, consentText, source } = req.body;
    if (!email || !consentText) return res.status(400).json({ error: 'email and consentText are required' });
    const sub = await Subscription.create({ email, consentText, source });
    res.status(201).json(sub);
  } catch (err) {
    console.error('subscription error', err);
    res.status(500).json({ error: 'failed to create subscription' });
  }
});

export default router;