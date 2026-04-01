import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    Full_Name: {
      type: String,
      required: true,
    },
    Institute: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Certificate =
  mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);

export default Certificate;