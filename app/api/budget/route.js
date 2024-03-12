import DBconnection from "@/app/libs/mongodb.config"
import Budget from "@/app/models/data.model"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { amount, event, devise, desc, country } = await req.json()

    await DBconnection()
    await Budget.create({ amount, event, devise, desc, country })

    return NextResponse.json({ message: "Budget inserted" }, { status: 201 })
}