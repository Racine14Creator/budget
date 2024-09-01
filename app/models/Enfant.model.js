import mongoose, { Schema } from "mongoose";

const EnfantSchema = new Schema(
  {
    Name: {
      type: Number,
      // required: true,
      // min: 3,
    },
    Fahter: {
      type: String,
      // required: true,
    },
    Mother: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      // required: true,
    },
    country: {
      type: String,
    },
    Nounou: {
      type: String,
      // required: true,
    },
    address: { type: String },
  },
  { timestamps: true }
);

const Enfant = mongoose.models.Enfant || mongoose.model("Enfant", EnfantSchema);
export default Enfant;
