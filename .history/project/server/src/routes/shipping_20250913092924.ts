import { Router } from 'express';
import { shiprocketLogin, createShiprocketOrder } from '../utils/shiprocket.js';

const router = Router();

router.post('/shiprocket/order', async (req, res) => {
  try {
    const token = await shiprocketLogin();

    const {
      order_id,
      order_date,
      billing_customer_name,
      billing_last_name,
      billing_address,
      billing_city,
      billing_pincode,
      billing_state,
      billing_country,
      billing_email,
      billing_phone,
      shipping_is_billing = true,
      line_items,
      payment_method = 'Prepaid',
      sub_total,
      length = 10,
      breadth = 10,
      height = 10,
      weight = 0.5,
    } = req.body as any;

    const channel_id = process.env.SHIPROCKET_CHANNEL_ID || '';
    const pickup_location = process.env.SHIPROCKET_PICKUP_LOCATION || 'Default';

    const payload = {
      order_id,
      order_date,
      pickup_location,
      channel_id,
      billing_customer_name,
      billing_last_name,
      billing_address,
      billing_city,
      billing_pincode,
      billing_state,
      billing_country,
      billing_email,
      billing_phone,
      shipping_is_billing,
      order_items: (line_items || []).map((it: any) => ({
        name: it.name,
        sku: it.sku,
        units: it.units,
        selling_price: it.selling_price,
        discount: it.discount || 0,
        tax: it.tax || 0,
        hsn: it.hsn || '',
      })),
      payment_method,
      sub_total,
      length,
      breadth,
      height,
      weight,
    };

    const result = await createShiprocketOrder(token, payload);
    res.json(result);
  } catch (err: any) {
    console.error('Shiprocket order error', err);
    res.status(500).json({ error: err.message || 'Failed to create Shiprocket order' });
  }
});

export default router;