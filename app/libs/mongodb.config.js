import mongoose from "mongoose";

const DBconnection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB...", db.connections[0].readyState);
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export default DBconnection