"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Garderie from "@/app/models/garderie.model";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await DBconnection();

    const garderie = await Garderie.findById(id);

    if (!garderie) {
      return NextResponse.json(
        { message: "No Garderie entry found with the given ID" },
        { status: 404 }
      );
    }

    return NextResponse.json({ garderie }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong...", error: error.message },
      { status: 500 }
    );
  }
}
