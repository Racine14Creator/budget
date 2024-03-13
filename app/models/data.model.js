import mongoose, { Schema } from "mongoose"

const budgetSchema = new Schema({
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    event: {
        type: String,
        required: true
    },
    devise: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String, required: true
    },
}, { timestamps: true })

const Budget = mongoose.models.Budget || mongoose.model("Budget", budgetSchema)
export default Budget