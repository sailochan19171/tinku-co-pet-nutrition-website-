declare module "razorpay" {
  interface RazorpayOptions {
    key_id: string;
    key_secret: string;
  }

  interface OrderOptions {
    amount: number;
    currency: string;
    receipt?: string;
    payment_capture?: number;
    notes?: Record<string, any>;
  }

  interface Order {
    id: string;
    amount: number;
    currency: string;
    status: string;
  }

  class Razorpay {
    constructor(options: RazorpayOptions);

    orders: {
      create(options: OrderOptions): Promise<Order>;
    };
  }

  export = Razorpay;
}