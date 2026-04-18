import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Verified"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Submission || mongoose.model("Submission", SubmissionSchema);
