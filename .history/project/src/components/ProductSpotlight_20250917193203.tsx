import React, { useMemo, useState } from 'react';
import CheckoutButton, { BillingInfo, LineItem } from './CheckoutButton';

const ProductSpotlight: React.FC = () => {
  const [billing, setBilling] = useState<BillingInfo>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    country: 'India',
    email: '',
    phone: '',
  });

  const price = 150; // INR
  const productName = 'Tinku & Co Pet-Safe Floor Cleaner 1L';

  const lineItems: LineItem[] = useMemo(() => [
    {
      name: productName,
      sku: 'TCP-FLOOR-1L',
      units: 1,
      selling_price: price,
      weight: 1.0,
      hsn: '340220',
    },
  ], []);

  const orderId = useMemo(() => `ORDER-${Date.now()}`, []);
  const orderDateISO = useMemo(() => new Date().toISOString(), []);

  const requiredFilled = billing.firstName && billing.address && billing.city && billing.pincode && billing.state && billing.email && billing.phone;

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white" aria-labelledby="product-spotlight-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Product visuals */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6195121/pexels-photo-6195121.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tinku & Co pet-safe floor cleaner bottle"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Content & Buy */}
          <div className="order-1 lg:order-2">
            <h2 id="product-spotlight-title" className="text-4xl lg:text-5xl font-bold text-blue-600">Tinku & Co</h2>
            <p className="mt-3 text-xl text-gray-700">Pet-Safe Floor Cleaner — Powerful on messes, gentle on paws.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border p-4">
                <div className="text-sm text-gray-500">Size</div>
                <div className="text-lg font-semibold">1 Liter</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-sm text-gray-500">Price</div>
                <div className="text-lg font-bold">₹{price}</div>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> Non-toxic, ammonia-free, low-odor</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> Residue-free, streak-free shine</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span> Safe for sealed hardwood, tile, vinyl, laminate</li>
            </ul>

            {/* Billing form */}
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input className="border rounded-lg px-3 py-2" placeholder="First name" value={billing.firstName} onChange={(e) => setBilling({ ...billing, firstName: e.target.value })} />
              <input className="border rounded-lg px-3 py-2" placeholder="Last name (optional)" value={billing.lastName || ''} onChange={(e) => setBilling({ ...billing, lastName: e.target.value })} />
              <input className="md:col-span-2 border rounded-lg px-3 py-2" placeholder="Address" value={billing.address} onChange={(e) => setBilling({ ...billing, address: e.target.value })} />
              <input className="border rounded-lg px-3 py-2" placeholder="City" value={billing.city} onChange={(e) => setBilling({ ...billing, city: e.target.value })} />
              <input className="border rounded-lg px-3 py-2" placeholder="Pincode" value={billing.pincode} onChange={(e) => setBilling({ ...billing, pincode: e.target.value })} />
              <input className="border rounded-lg px-3 py-2" placeholder="State" value={billing.state} onChange={(e) => setBilling({ ...billing, state: e.target.value })} />
              <input className="border rounded-lg px-3 py-2" placeholder="Country" value={billing.country} onChange={(e) => setBilling({ ...billing, country: e.target.value })} />
              <input className="border rounded-lg px-3 py-2" placeholder="Email" value={billing.email} onChange={(e) => setBilling({ ...billing, email: e.target.value })} />
              <input className="border rounded-lg px-3 py-2" placeholder="Phone" value={billing.phone} onChange={(e) => setBilling({ ...billing, phone: e.target.value })} />
            </form>

            <div className="mt-4">
              {requiredFilled ? (
                <CheckoutButton
                  amountInRupees={price}
                  orderId={orderId}
                  orderDateISO={orderDateISO}
                  billing={billing}
                  lineItems={lineItems}
                  dimensions={{ length: 20, breadth: 15, height: 10, weight: 1.2 }}
                  label={`Buy Now — ₹${price}`}
                />
              ) : (
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded cursor-not-allowed" disabled>
                  Fill details to Buy — ₹{price}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;