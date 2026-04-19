import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Verified"],
      default: "Pending",
    },
    // Meta Tracking Data
    fbp: String,
    fbc: String,
    userAgent: String,
    ipAddress: String,
  },
  { timestamps: true }
);

export default mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);
