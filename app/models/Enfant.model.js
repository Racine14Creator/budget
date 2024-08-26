import mongoose, { Schema } from "mongoose";

const EnfantSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Father: {
      type: String,
      required: true,
    },
    Mother: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    Nounou: {
      type: String,
    },
  },
  { timestamps: true }
);

const Enfant = mongoose.models.Enfant || mongoose.model("Enfant", EnfantSchema);
export default Enfant;
