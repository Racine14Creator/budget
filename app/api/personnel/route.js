"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Personnel from "@/app/models/Personnel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await DBconnection();

    const people = await Personnel.find();
    return NextResponse.json({ people }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch data", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { FirstName, LastName, email, phone, salaire, adress } =
    await req.json();

  if (!FirstName || !LastName || !email || !phone || !salaire || !adress) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await DBconnection();
    const person = await Personnel.create({
      FirstName,
      LastName,
      email,
      phone,
      salaire,
      adress,
    });
    return NextResponse.json(
      { message: "Person created", person },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create person", error },
      { status: 500 }
    );
  }
}
