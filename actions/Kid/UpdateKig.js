"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Enfant from "@/app/models/Enfant.model";
import { revalidatePath } from "next/cache"; // Revalidate cache after operation if needed

export async function updateEnfant(id, data) {
  try {
    // Establish a database connection
    await DBconnection();

    // Validate input data
    const { Name, Father, Mother, Phone, country, Nounou } = data;

    if (!Name || !Father || !Mother || !Phone || !Nounou) {
      throw new Error("Tous les champs doivent être remplis!");
    }

    // Update the Enfant record
    const updatedEnfant = await Enfant.findByIdAndUpdate(
      id,
      {
        Name,
        Father,
        Mother,
        Phone,
        country,
        Nounou,
      },
      { new: true }
    );

    if (!updatedEnfant) throw new Error("Enfant not found");

    // Optionally revalidate a specific path after operation
    revalidatePath("/dashboard/garderie"); // Replace with your path if needed

    return { success: true, updatedEnfant };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
