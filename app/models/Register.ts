import mongoose, { Schema, Document } from "mongoose";

export interface IRegistration extends Document {
  fullName: string;
  phone: string;
  dob: string;
  gender: string;
  Address: string;
  academyName: string;
  beltRank: string;
}

const RegisterSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    Address: { type: String, required: true },
    academyName: { type: String, required: true },
    beltRank: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", RegisterSchema);
