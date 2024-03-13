import DBconnection from "@/app/libs/mongodb.config";
import Budget from "@/app/models/data.model";
import { NextResponse } from "next/server";

// Middleware to set CORS headers
const allowCors = (handler) => async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    return handler(req, res);
};

export default allowCors(async (req, res) => {
    if (req.method === "POST") {
        const { amount, transEvent, devise, desc, country } = await req.body;

        await DBconnection();

        await Budget.create({
            amount,
            event: transEvent,
            devise,
            description: desc,
            country,
        });

        return NextResponse.json({ message: "Budget inserted" }, { status: 201 });
    } else if (req.method === "GET") {
        await DBconnection();

        const budgets = await Budget.find();

        return NextResponse.json({ budgets }, { status: 200 });
    } else if (req.method === "DELETE") {
        const id = req.query.id;

        await DBconnection();

        const event = await Budget.findByIdAndDelete(id);
        if (event) {
            return NextResponse.json({ message: "Budget Deleted" }, { status: 201 });
        } else {
            return NextResponse.json(
                { message: "Something went wrong..." },
                { status: 500 }
            );
        }
    } else {
        return NextResponse.error(
            new Error(`Method ${req.method} Not Allowed`),
            { status: 405 }
        );
    }
});
