/* eslint-disable */

import type { Model } from "mongoose";
import { Schema, model, models } from "mongoose";

const schema = new Schema<IPackage>(
  {
    modules: [
      {
        type: Schema.Types.ObjectId,
        ref: "UserPackageModule",
      },
    ],
    active: {
      type: Boolean,
    },
    compare_at: {
      type: Number,
    },
    cost: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    discount_type: {
      type: String,
      enum: ["FIXED", "PERCENTAGE"],
    },
  },
  {
    timestamps: true,
  }
);

const MODEL = "UserPackage";
export default (models[MODEL] ||
  model(MODEL, schema)) as Model<IPackage>;
