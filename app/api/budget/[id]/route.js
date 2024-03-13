import DBconnection from "@/app/libs/mongodb.config";
import Budget from "@/app/models/data.model";
import { NextResponse } from "next/server";

// Middleware to set CORS headers
const allowCors = (handler) => async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    return handler(req, res);
};

export default allowCors(async (req, res) => {
    if (req.method === "GET") {
        const { id } = req.query;
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
    } else if (req.method === "PUT") {
        const { id } = req.query;
        await DBconnection();
        const { amount, event, devise, desc, country } = await req.body;
        const budget = await Budget.findByIdAndUpdate(id, {
            amount,
            event,
            devise,
            description: desc,
            country,
        });
        if (budget) {
            return NextResponse.json({ budget }, { status: 200 });
        } else {
            return NextResponse.json(
                { message: "Something went wrong" },
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
