import React from 'react';

declare global {
  interface Window { Razorpay: any }
}

export type LineItem = {
  name: string;
  sku: string;
  units: number;
  selling_price: number; // per unit price (INR)
  discount?: number;
  tax?: number;
  hsn?: string;
  weight?: number; // kg per unit
};

export type BillingInfo = {
  firstName: string;
  lastName?: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  email: string;
  phone: string;
};

export type CheckoutButtonProps = {
  amountInRupees: number;
  orderId: string; // your internal order id
  orderDateISO: string; // e.g., new Date().toISOString()
  billing: BillingInfo;
  lineItems: LineItem[];
  dimensions?: { length?: number; breadth?: number; height?: number; weight?: number };
  label?: string;
};

const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
const api = (p: string) => `${API_BASE}${p.startsWith('/') ? p : `/${p}`}`;

async function createRazorpayOrder(amountPaise: number) {
  const resp = await fetch(api('/api/payments/razorpay/order'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: amountPaise, currency: 'INR' }),
  });
  if (!resp.ok) throw new Error('Failed to create Razorpay order');
  return resp.json();
}

export default function CheckoutButton({ amountInRupees, orderId, orderDateISO, billing, lineItems, dimensions, label = 'Pay with Razorpay' }: CheckoutButtonProps) {
  const onPay = async () => {
    const amountPaise = Math.round(amountInRupees * 100);
    const order = await createRazorpayOrder(amountPaise);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: amountPaise,
      currency: 'INR',
      name: 'Tinku & Co.',
      description: 'Order Payment',
      order_id: order.id,
      prefill: {
        name: `${billing.firstName} ${billing.lastName || ''}`.trim(),
        email: billing.email,
        contact: billing.phone,
      },
      handler: async (response: any) => {
        // Prepare Shiprocket payload
        const line_items = lineItems.map((it) => ({
          name: it.name,
          sku: it.sku,
          units: it.units,
          selling_price: it.selling_price,
          discount: it.discount || 0,
          tax: it.tax || 0,
          hsn: it.hsn || '',
        }));

        const sub_total = lineItems.reduce((sum, it) => sum + it.selling_price * it.units, 0);
        const shipPayload = {
          order_id: orderId,
          order_date: orderDateISO,
          billing_customer_name: billing.firstName,
          billing_last_name: billing.lastName || '',
          billing_address: billing.address,
          billing_city: billing.city,
          billing_pincode: billing.pincode,
          billing_state: billing.state,
          billing_country: billing.country,
          billing_email: billing.email,
          billing_phone: billing.phone,
          shipping_is_billing: true,
          line_items,
          payment_method: 'Prepaid',
          sub_total,
          length: dimensions?.length ?? 10,
          breadth: dimensions?.breadth ?? 10,
          height: dimensions?.height ?? 10,
          weight: dimensions?.weight ?? Math.max(0.5, lineItems.reduce((w, it) => w + (it.weight || 0) * it.units, 0)),
        };

        const verifyResp = await fetch(api('/api/payments/razorpay/verify'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...response,
            create_shipping: true,
            shipping: shipPayload,
          }),
        });
        const verify = await verifyResp.json();

        if (verify.valid) {
          alert('Payment successful! Shipping created: ' + (verify?.shipping?.shipment_id || 'OK'));
        } else {
          alert('Payment verification failed');
        }
      },
      theme: { color: '#111111' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={onPay} className="px-4 py-2 bg-black text-white rounded">
      {label}
    </button>
  );
}