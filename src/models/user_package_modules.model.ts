/* eslint-disable */
import type { Model } from "mongoose";
import mongoose from "mongoose";

// enum EModulesSchemaIds {
//   "tasks",
//   "uploader",
//   "report-templates",
//   "task",
//   "dashboard",
// }

const MODEL = "UserPackageModule";
const schema = new mongoose.Schema<IModule>({
  name: {
    type: String,
    required: true
  },
  views: [
    {
      type: String
    }
  ]
  // module: {
  //   type: String,
  //   enum: EModulesSchemaIds
  // },
  // unit: {
  //   type: String,
  //   enum: ["BANDWIDTH", "USAGE", "DAYS"],
  //   default: "BANDWIDTH",
  // },
  // indicator: {
  //   type: String,
  // },
  // available: {
  //   type: Number,
  //   default: 0,
  // },
  // used: {
  //   type: Number,
  //   default: 0,
  // },
  // active: {
  //   type: Boolean,
  //   default: true,
  // },
}, {
  timestamps: true
});

export default (mongoose.models[MODEL] ||
  mongoose.model(MODEL, schema)) as Model<IModule>;
