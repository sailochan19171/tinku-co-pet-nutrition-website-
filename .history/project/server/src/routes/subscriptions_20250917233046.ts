import { Router } from 'express';
import Subscription from '../models/Subscription.js';
import { sendSubscriptionSeries } from '../jobs/subscriptionEmails.js';

const router = Router();

// POST /api/subscriptions — create + send welcome immediately
router.post('/', async (req, res) => {
  try {
    const { email, consentText, source } = req.body;
    if (!email || !consentText) return res.status(400).json({ error: 'email and consentText are required' });

    let sub = await Subscription.findOne({ email });
    if (!sub) {
      sub = await Subscription.create({ email, consentText, source, sentWelcome: false });
    }

    // Send welcome instantly (fire-and-forget)
    (async () => {
      try {
        await sendSubscriptionSeries(email);
        sub!.sentWelcome = true;
        await sub!.save();
      } catch (e) {
        console.error('subscription email series failed', e);
      }
    })();

    res.status(201).json(sub);
  } catch (err) {
    console.error('subscription error', err);
    res.status(500).json({ error: 'failed to create subscription' });
  }
});

export default router;