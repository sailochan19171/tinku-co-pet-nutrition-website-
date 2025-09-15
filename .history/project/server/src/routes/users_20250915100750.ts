import { Router, Request, Response } from 'express';
import User from '../models/User.js';

const router = Router();

// Create or get user on signup
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    let user = await User.findOne({ email });
    if (user) return res.status(409).json({ error: 'user exists' });

    user = await User.create({ email, name, password, provider: 'local' });
    res.status(201).json({ id: user._id, email: user.email, name: user.name });
  } catch (err) {
    console.error('signup error', err);
    res.status(500).json({ error: 'failed to signup' });
  }
});

// Simple login check (demo only)
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ error: 'invalid credentials' });
    res.json({ id: user._id, email: user.email, name: user.name });
  } catch (err) {
    console.error('login error', err);
    res.status(500).json({ error: 'failed to login' });
  }
});

// Upsert/sync a user after external auth (Firebase, Google, etc.)
router.post('/sync', async (req, res) => {
  try {
    const { email, name, provider } = req.body as {
      email?: string;
      name?: string;
      provider?: 'local' | 'oauth';
    };

    if (!email) return res.status(400).json({ error: 'email required' });

    const update: any = {};
    if (typeof name === 'string' && name.trim()) update.name = name.trim();
    if (provider) update.provider = provider === 'oauth' ? 'oauth' : 'local';

    const user = await User.findOneAndUpdate(
      { email },
      { $set: update, $setOnInsert: { email } },
      { upsert: true, new: true }
    );

    return res.json({ id: user!._id, email: user!.email, name: user!.name });
  } catch (err) {
    console.error('sync user error', err);
    res.status(500).json({ error: 'failed to sync user' });
  }
});

// Upsert/sync a user after external auth (Firebase, Google, etc.)
router.post('/sync', async (req, res) => {
  try {
    const { email, name, provider } = req.body as {
      email?: string;
      name?: string;
      provider?: 'local' | 'oauth';
    };

    if (!email) return res.status(400).json({ error: 'email required' });

    const update: any = {};
    if (typeof name === 'string' && name.trim()) update.name = name.trim();
    if (provider) update.provider = provider === 'oauth' ? 'oauth' : 'local';

    const user = await User.findOneAndUpdate(
      { email },
      { $set: update, $setOnInsert: { email } },
      { upsert: true, new: true }
    );

    return res.json({ id: user!._id, email: user!.email, name: user!.name });
  } catch (err) {
    console.error('sync user error', err);
    res.status(500).json({ error: 'failed to sync user' });
  }
});

export default router;