import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IMealItem {
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string; // e.g., "Chicken & Rice"
  grams: number; // portion size in grams
  notes?: string;
}

export interface IDayPlan {
  dateISO: string; // YYYY-MM-DD
  items: IMealItem[];
  summaryText?: string; // human-friendly narrative
}

export interface IMealPlan extends Document {
  petId: Types.ObjectId;
  weekISO: string; // e.g., 2025-W37
  days: IDayPlan[];
}

const MealItemSchema = new Schema<IMealItem>({
  meal: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'snack'], required: true },
  name: { type: String, required: true },
  grams: { type: Number, required: true },
  notes: { type: String },
}, { _id: false });

const DayPlanSchema = new Schema<IDayPlan>({
  dateISO: { type: String, required: true },
  items: { type: [MealItemSchema], default: [] },
  summaryText: { type: String },
}, { _id: false });

const MealPlanSchema = new Schema<IMealPlan>({
  petId: { type: Schema.Types.ObjectId, ref: 'PetProfile', required: true, index: true },
  weekISO: { type: String, required: true, index: true },
  days: { type: [DayPlanSchema], default: [] },
}, { timestamps: true });

MealPlanSchema.index({ petId: 1, weekISO: 1 }, { unique: true });

export default mongoose.model<IMealPlan>('MealPlan', MealPlanSchema);