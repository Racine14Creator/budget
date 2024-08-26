import DBconnection from "@/app/libs/mongodb.config";
import Enfant from "@/app/models/Enfant.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, father, mother, phone, country, nounou } = await req.json();

  try {
    await DBconnection();
    await Enfant.create({
      Name: name,
      Father: father,
      Mother: mother,
      Phone: phone,
      country,
      Nounou: nounou,
    });
    return NextResponse.json({ message: "Enfant inserted" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
export async function GET() {
  await DBconnection();

  const Enfants = await Enfant.find();

  return NextResponse.json({ Enfants }, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  // console.log(id)

  await DBconnection();

  const event = await Enfant.findByIdAndDelete(id);
  if (event) {
    return NextResponse.json({ message: "Enfant Deleted" }, { status: 201 });
  } else {
    return NextResponse.json(
      { message: "Something went wrong..." },
      { status: 500 }
    );
  }
}
