"use server";

import DBconnection from "@/app/libs/mongodb.config";
import Garderie from "@/app/models/Garderie";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  await DBconnection();

  const enfant = await Garderie.findById(id);

  return NextResponse.json({ enfant }, { status: 200 });
}
