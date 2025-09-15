import mongoose, { Schema, Document, Types } from 'mongoose';

export type Species = 'dog' | 'cat';
export type ActivityLevel = 'low' | 'moderate' | 'high';

export interface IPetProfile extends Document {
  ownerId?: Types.ObjectId; // optional linkage to User
  name: string;
  species: Species;
  breed?: string;
  ageYears: number; // rounded years
  weightKg: number;
  activityLevel: ActivityLevel;
  allergies?: string[];
}

const PetProfileSchema = new Schema<IPetProfile>({
  ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  species: { type: String, enum: ['dog', 'cat'], required: true },
  breed: { type: String },
  ageYears: { type: Number, min: 0, required: true },
  weightKg: { type: Number, min: 0, required: true },
  activityLevel: { type: String, enum: ['low', 'moderate', 'high'], required: true },
  allergies: { type: [String], default: [] },
}, { timestamps: true });

export default mongoose.model<IPetProfile>('PetProfile', PetProfileSchema);