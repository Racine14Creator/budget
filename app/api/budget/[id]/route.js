import DBconnection from "@/app/libs/mongodb.config";
import Budget from "@/app/models/data.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const { id } = params

    await DBconnection();

    const budget = await Budget.findById(id)

    if (budget) {
        return NextResponse.json({ budget }, { status: 200 })
    } else {
        return NextResponse.json({ message: "We can't find this..." }, { status: 201 })
    }
}

export async function PUT(req, { params }) {

    const { id } = params

    await DBconnection()

    const { amount, event, devise, desc, country } = await req.json()

    const budget = await Budget.findByIdAndUpdate(id, { amount, event, devise, description: desc, country })

    if (budget) {
        return NextResponse.json({ budget }, { status: 201 })
    } else {
        return NextResponse.json({ message: "Something went wrong" })
    }
}