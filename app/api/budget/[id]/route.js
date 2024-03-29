import DBconnection from "@/app/libs/mongodb.config";
import Budget from "@/app/models/data.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const { id } = params;

    await DBconnection();

    const budget = await Budget.findById(id);

    if (budget) {
        return NextResponse.json({ budget }, { status: 200 });
    } else {
        return NextResponse.json(
            { message: "We can't find this..." },
            { status: 404 }
        );
    }
}

export async function PUT(request, { params }) {

    const { id } = params;

    await DBconnection();

    const { amount, event, devise, description, date, country } = await request.json();

    const budget = await Budget.findByIdAndUpdate(id, {
        amount,
        event,
        devise,
        description,
        country,
        date
    });
    if (budget) {
        return NextResponse.json({ budget }, { status: 200 });
    } else {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
