import type { Model } from "mongoose";
import mongoose from "mongoose";

import { featureSchema } from "./features.model";

const MODEL = "Package";

const schema = new mongoose.Schema<IPackage>(
  {
    title: {
      type: String,
    },
    modules: [
      {
        type: featureSchema,
        default: [],
      },
    ],
    cost: {
      type: Number,
    },
    compare_at: {
      type: Number,
    },
    active: {
      type: Boolean,
    },
    discount: {
      type: Number,
    },
    discount_type: {
      type: String,
      enum: ["FIXED", "PERCENTAGE"],
    },
    duration: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models[MODEL] ||
  mongoose.model(MODEL, schema)) as Model<IPackage>;
