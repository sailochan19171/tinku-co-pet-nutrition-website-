import { Router } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { shiprocketLogin, createShiprocketOrder } from '../utils/shiprocket.js';

const router = Router();

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

const razorpayConfigured = Boolean(RAZORPAY_KEY_ID && RAZORPAY_KEY_SECRET);

let razorpay: any = null;
if (razorpayConfigured) {
  razorpay = new Razorpay({
    key_id: RAZORPAY_KEY_ID!,
    key_secret: RAZORPAY_KEY_SECRET!,
  });
} else {
  console.warn('Razorpay keys are not set. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in project/server/.env');
}

// Create an order on Razorpay (amount in paise)
router.post('/razorpay/order', async (req, res) => {
  try {
    if (!razorpayConfigured || !razorpay) {
      return res.status(503).json({ error: 'Razorpay is not configured on the server' });
    }

    const { amount, currency = 'INR', receipt, notes } = req.body as {
      amount: number; currency?: string; receipt?: string; notes?: Record<string, string>;
    };

    if (!amount || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: receipt || `rcpt_${Date.now()}`,
      notes,
    });

    res.json(order);
  } catch (err) {
    console.error('Create Razorpay order failed', err);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Verify payment signature from frontend success handler and optionally create a Shiprocket order
router.post('/razorpay/verify', async (req: Request, res: Response) => {
  try {
    if (!razorpayConfigured) {
      return res.status(503).json({ error: 'Razorpay is not configured on the server' });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, create_shipping, shipping } = req.body as any;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const hmac = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET as string)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const valid = hmac === razorpay_signature;
    if (!valid) return res.status(400).json({ valid: false });

    let shippingResult: any = null;
    if (create_shipping && shipping) {
      try {
        const token = await shiprocketLogin();
        shippingResult = await createShiprocketOrder(token, shipping);
      } catch (e: any) {
        console.error('Shiprocket order creation failed', e);
        // Do not fail payment verify if shipping fails; return info to client
        shippingResult = { error: e?.message || 'Shiprocket failed' };
      }
    }

    res.json({ valid: true, shipping: shippingResult });
  } catch (err) {
    console.error('Verify Razorpay failed', err);
    res.status(500).json({ error: 'Verification failed' });
  }
});

export default router;