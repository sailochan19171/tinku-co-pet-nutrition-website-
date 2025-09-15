import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import subscriptionsRouter from './routes/subscriptions.js';
import usersRouter from './routes/users.js';

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json());

const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  console.warn('MONGO_URI is not set. Set it in project/server/.env');
}

async function start() {
  try {
    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI, { dbName: process.env.MONGO_DB || 'pet' });
      console.log('MongoDB connected');
    }

    app.use('/api/subscriptions', subscriptionsRouter);
    app.use('/api/users', usersRouter);

    app.get('/api/health', (_req, res) => {
      res.json({ ok: true });
    });

    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Server start failed', err);
    process.exit(1);
  }
}

start();