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
export async function DELETE(req) {
    
    const id = req.nextUrl.searchParams.get("id")

    await DBconnection()

    const event = await Budget.findByIdAndDelete(id)
    if (event) {
        return NextResponse.json({ message: "Budget Deleted" }, { status: 201 })
    } else {
        return NextResponse.json({ message: "Someting went wrong..." })
    }
}