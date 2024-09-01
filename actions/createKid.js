"use server";
import DBconnection from "@/app/libs/mongodb.config";
import { revalidatePath } from "next/cache"; // Revalidate cache after operation if needed

export async function createEnfant(data) {
  try {
    // Establish a database connection
    await DBconnection();

    // Validate input data
    const { Name, Father, Mother, Phone, country, Nounou } = data;

    if (!Name || !Father || !Mother || !Phone || !Nounou) {
      throw new Error("Tous les champs doivent être remplis!");
    }

    // Create a new Enfant record
    const newEnfant = await DBconnection.Enfant.create({
      Name,
      Father,
      Mother,
      Phone,
      country,
      Nounou,
    });

    // Optionally revalidate a specific path after operation
    revalidatePath("/dashboard/garderie"); // Replace with your path if needed

    return { success: true, newEnfant };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
