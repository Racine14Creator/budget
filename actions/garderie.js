"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Garderie from "@/app/models/Garderie";

export async function getEnfants(id = null) {
  try {
    // Establish a database connection
    await DBconnection();

    if (id) {
      // Fetch a single record by ID
      const enfant = await Garderie.findById(id);
      if (!enfant) throw new Error("Enfant not found");

      return { success: true, enfant };
    } else {
      // Fetch all records
      const enfants = await Garderie.find().sort({ createdAt: -1 });

      return { success: true, enfants };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}
