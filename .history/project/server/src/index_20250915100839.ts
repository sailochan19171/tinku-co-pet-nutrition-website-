import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import subscriptionsRouter from './routes/subscriptions.js';
import usersRouter from './routes/users.js';
import petsRouter from './routes/pets.js';
import plansRouter from './routes/plans.js';
import shoppingRouter from './routes/shopping.js';
import paymentsRouter from './routes/payments.js';
import shippingRouter from './routes/shipping.js';

// Load env from server/.env next to this file
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

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
    app.use('/api/pets', petsRouter);
    app.use('/api/plans', plansRouter);
    app.use('/api/shopping-list', shoppingRouter);
    app.use('/api/payments', paymentsRouter);
    app.use('/api/shipping', shippingRouter);

    app.get('/api/health', (_req: Request, res: Response) => {
      res.json({ ok: true });
    });

    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Server start failed', err);
    process.exit(1);
  }
}

start();