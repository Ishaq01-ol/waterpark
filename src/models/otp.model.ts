import type { Model } from "mongoose";
import mongoose, { Date } from "mongoose";

const MODEL = "Otp";
interface IOtp {
  otp: number;
  validity: Date;
}

export const otpSchema = new mongoose.Schema<IOtp>(
  {
    otp: {
      type: Number,
      required: true,
    },
    validity: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models[MODEL] ||
  mongoose.model(MODEL, otpSchema)) as Model<IOtp>;
