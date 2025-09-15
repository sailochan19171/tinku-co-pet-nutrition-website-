// Minimal Shiprocket client using global fetch (Node 18+)
export async function shiprocketLogin(): Promise<string> {
  const tokenFromEnv = process.env.SHIPROCKET_TOKEN;
  if (tokenFromEnv) return tokenFromEnv;

  const email = process.env.SHIPROCKET_EMAIL;
  const password = process.env.SHIPROCKET_PASSWORD;
  if (!email || !password) throw new Error('Shiprocket credentials missing');

  const f: any = (globalThis as any).fetch;
  if (!f) throw new Error('Global fetch not available on this Node version');

  const resp = await f('https://apiv2.shiprocket.in/v1/external/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!resp.ok) throw new Error(`Shiprocket login failed: ${resp.status}`);
  const data = await resp.json();
  if (!data.token) throw new Error('Shiprocket token missing');
  return data.token as string;
}

export async function createShiprocketOrder(token: string, payload: any) {
  const f: any = (globalThis as any).fetch;
  if (!f) throw new Error('Global fetch not available on this Node version');

  const resp = await f('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await resp.json();
  if (!resp.ok) {
    throw new Error(`Shiprocket create order failed: ${resp.status} ${JSON.stringify(data)}`);
  }
  return data;
}