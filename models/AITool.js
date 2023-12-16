import { Schema, model } from "mongoose";

const AIToolSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    toolDescription: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    useCase1: {
      type: String,
      required: true,
    },
    useCase2: {
      type: String,
    },
    useCase3: {
      type: String,
    },
    price: {
      type: Number,
      min: 0,
    },
    pricePlan: {
      type: String,
      enum: ["DOLLARS_PER_WEEK", "DOLLARS_PER_MONTH", "FREE"],
      default: "DOLLARS_PER_WEEK",
    },
    pricing: {
      type: String,
      enum: ["Free", "Basic", "Premium"],
    },
    toolURL: {
      type: String,
      required: true,
      validate: {
        validator: (url) => url && url.startsWith("http"),
        message: "Invalid URL format",
      },
    },
    toolFeature: {
      type: String,
      required: true,
    },
    toolTags: {
      type: [String],
      required: true,
    },
    toolScreenshot: {
      type: String,
      validate: {
        validator: (url) => url && url.startsWith("http"),
        message: "Invalid URL format",
      },
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const AITool = model("AITool", AIToolSchema);
export default AITool;
