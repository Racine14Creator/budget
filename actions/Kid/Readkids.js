"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Enfant from "@/app/models/Enfant.model";

export async function getEnfants(id = null) {
  try {
    // Establish a database connection
    await DBconnection();

    if (id) {
      // Fetch a single record by ID
      const enfant = await Enfant.findById(id);
      if (!enfant) throw new Error("Enfant not found");

      return { success: true, enfant };
    } else {
      // Fetch all records
      const enfants = await Enfant.find().sort({ createdAt: -1 });

      return { success: true, enfants };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}
