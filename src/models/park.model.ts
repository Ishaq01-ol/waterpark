import type { Model } from "mongoose";
import mongoose from "mongoose";

export const schema = new mongoose.Schema<IPark>(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    GPS: {
      type: String,
      required: true,
    },
    additionalDetails: {
      type: {},
      required: false,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const MODEL = "Parks";
export default (mongoose.models[MODEL] ||
  mongoose.model(MODEL, schema)) as Model<IPark>;
