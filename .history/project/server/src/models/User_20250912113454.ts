import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name?: string;
  // For demo only; in real-world store salted hashed passwords
  password?: string;
  provider?: 'local' | 'oauth';
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, index: true },
  name: { type: String },
  password: { type: String },
  provider: { type: String, default: 'local' }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);