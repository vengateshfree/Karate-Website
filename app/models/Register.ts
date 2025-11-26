import mongoose, { Schema, Document } from "mongoose";

export interface IRegistration extends Document {
  name: string;
  email: string;
  phone: string;
}

const Register = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", Register);
