import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

// Create or get user on signup
router.post('/signup', async (req, res) => {
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
router.post('/login', async (req, res) => {
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

export default router;