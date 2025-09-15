import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscription extends Document {
  email: string;
  consentText: string;
  consentAt: Date;
  source?: string;
}

const SubscriptionSchema = new Schema<ISubscription>({
  email: { type: String, required: true, index: true },
  consentText: { type: String, required: true },
  consentAt: { type: Date, default: () => new Date(), required: true },
  source: { type: String }
}, { timestamps: true });

export default mongoose.model<ISubscription>('Subscription', SubscriptionSchema);