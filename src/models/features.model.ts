/* eslint-disable */
import {Schema} from "mongoose";

export const featureSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    views: [
      {
        type: String,
        required: true
      }
    ]
  }
)