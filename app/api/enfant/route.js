"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Enfant from "@/app/models/Enfant.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { Name, Father, Mother, Phone, country, Nounou, Address } =
    await req.json();

  if (!Name || !Father || !Mother || !Phone || !Nounou || !Address) {
    return NextResponse.json(
      { message: "All required fields must be filled." },
      { status: 400 }
    );
  }

  try {
    await DBconnection();

    const enfant = await Enfant.create({
      Name,
      Father,
      Mother,
      Phone,
      country,
      Nounou,
      Address,
    });

    return NextResponse.json(
      { message: "Enfant inserted", enfant },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to insert Enfant" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await DBconnection();
    const enfants = await Enfant.find().sort({ createdAt: -1 });
    return NextResponse.json({ enfants }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch Enfants" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "ID is required" }, { status: 400 });
  }

  try {
    await DBconnection();
    const enfant = await Enfant.findByIdAndDelete(id);
    if (!enfant) {
      return NextResponse.json(
        { message: "Enfant not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Enfant Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete Enfant" },
      { status: 500 }
    );
  }
}
