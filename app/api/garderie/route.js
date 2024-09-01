"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Garderie from "@/app/models/Garderie";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { Name, Father, Mother, Phone, country, Nounou, address } =
    await req.json();

  await DBconnection();

  const res = await Garderie.create({
    Name,
    Father,
    Mother,
    Phone,
    country,
    Nounou,
    address,
  });

  if (res) {
    return NextResponse.json(
      { message: "Garderie entry inserted" },
      { status: 201 }
    );
  } else {
    return NextResponse.json({ message: "DB error" });
  }
}

export async function GET() {
  try {
    await DBconnection();

    const garderies = await Garderie.find().sort({ createdAt: -1 });

    return NextResponse.json({ garderies }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong...", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await DBconnection();

    const garderie = await Garderie.findByIdAndDelete(id);

    if (!garderie) {
      return NextResponse.json(
        { message: "No Garderie entry found with the given ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Garderie entry deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong...", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const { Name, Father, Mother, Phone, country, Nounou, address } =
      await req.json();

    if (
      !id ||
      !Name ||
      !Father ||
      !Mother ||
      !Phone ||
      !country ||
      !Nounou ||
      !address
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await DBconnection();

    const garderie = await Garderie.findByIdAndUpdate(
      id,
      {
        Name,
        Father,
        Mother,
        Phone,
        country,
        Nounou,
        address,
      },
      { new: true }
    );

    if (!garderie) {
      return NextResponse.json(
        { message: "No Garderie entry found with the given ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Garderie entry updated", garderie },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong...", error: error.message },
      { status: 500 }
    );
  }
}
