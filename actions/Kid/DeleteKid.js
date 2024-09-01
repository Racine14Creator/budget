"use server";
import DBconnection from "@/app/libs/mongodb.config";
import Enfant from "@/app/models/Enfant.model";
import { revalidatePath } from "next/cache"; // Revalidate cache after operation if needed

export async function deleteEnfant(id) {
  try {
    // Establish a database connection
    await DBconnection();

    const deletedEnfant = await Enfant.findByIdAndDelete(id);
    if (!deletedEnfant) throw new Error("Enfant not found");

    // Optionally revalidate a specific path after operation
    revalidatePath("/dashboard/garderie"); // Replace with your path if needed

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
