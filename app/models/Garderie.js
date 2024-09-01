import mongoose, { Schema } from "mongoose";

const GarderieSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      minlength: 3,
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
      required: true,
      match: [/^\d{10,15}$/, "Please enter a valid phone number"],
    },
    country: {
      type: String,
      required: true,
    },
    Nounou: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Garderie =
  mongoose.models.Garderie || mongoose.model("Garderie", GarderieSchema);
export default Garderie;
