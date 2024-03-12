import DBconnection from "@/app/libs/mongodb.config"
import Budget from "@/app/models/data.model"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { amount, event, devise, desc, country } = await req.json()

    await DBconnection()

    await Budget.create({ amount, event, devise, description: desc, country })

    return NextResponse.json({ message: "Budget inserted" }, { status: 201 })

}

export async function GET() {

    await DBconnection()

    const budgets = await Budget.find()

    return NextResponse.json({ budgets }, { status: 200 })
}
export async function DELETE() {
    await DBconnection()

    return NextResponse.json({ message: "DELETE" })
}