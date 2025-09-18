import mongoose, { Schema, Document } from 'mongoose';

export interface ISubscription extends Document {
  email: string;
  consentText: string;
  consentAt: Date;
  source?: string;
  // Flags for series
  sentWelcome?: boolean;
  sentEducational?: boolean;
  sentShowcase?: boolean;
  sentSocialProof?: boolean;
  sentOffer?: boolean;
  lastTipsAt?: Date | null;
  inactiveSince?: Date | null;
}

const SubscriptionSchema = new Schema<ISubscription>({
  email: { type: String, required: true, index: true },
  consentText: { type: String, required: true },
  consentAt: { type: Date, default: () => new Date(), required: true },
  source: { type: String },

  sentWelcome: { type: Boolean, default: false },
  sentEducational: { type: Boolean, default: false },
  sentShowcase: { type: Boolean, default: false },
  sentSocialProof: { type: Boolean, default: false },
  sentOffer: { type: Boolean, default: false },
  lastTipsAt: { type: Date, default: null },
  inactiveSince: { type: Date, default: null }
}, { timestamps: true });

export default mongoose.model<ISubscription>('Subscription', SubscriptionSchema);