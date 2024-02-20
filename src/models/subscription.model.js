import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.types.ObjectId,
      ref: "User",
    },
    channel: {
      type: Schema.types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default model("Subscription", subscriptionSchema);
