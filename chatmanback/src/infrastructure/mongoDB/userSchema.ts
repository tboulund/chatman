import mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  hashedPassword: String,
  salt: String,
});
