import mongoose, { Schema, models } from 'mongoose';
import { encrypt } from 'next/dist/server/app-render/action-encryption-utils';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  profile: { type: String, required: false },
  password: { type: String, required: true },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = bcrypt.hash(user.password, 10);
  next();
});

const User = models.User || mongoose.model('User', userSchema);
export default User;
