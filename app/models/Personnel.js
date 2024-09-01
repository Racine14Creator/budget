import mongoose, { Schema } from "mongoose";

const PersonSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    salaire: {
      type: Number,
      required: true,
      min: 0,
    },
    adress: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Personnel =
  mongoose.models.Personnel || mongoose.model("Personnel", PersonSchema);
export default Personnel;
