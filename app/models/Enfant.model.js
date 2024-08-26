import mongoose, { Schema } from "mongoose";

const EnfantSchema = new Schema(
  {
    Name: {
      type: Number,
      required: true,
      min: 0,
    },
    Fahter: {
      type: String,
      required: true,
    },
    Mother: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    Nounou: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Enfant = mongoose.models.Enfant || mongoose.model("Enfant", EnfantSchema);
export default Enfant;
