
// GET

import DBconnection from "@/app/libs/mongodb.config";
import User from "@/app/models/User.module";
import { NextResponse } from "next/server";

export async function GET(){
    await DBconnection()

    const users = await User.find()

    return NextResponse.json({users}, {status: 200})
}

/**
 * Post
 */
export async function POST(req){
    return NextResponse.json({message: "Psot req"})
}
/**
 * DELETE
 */

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id')
    await DBconnection()
    const user = await User.findByIdAndDelete(id)

    if(user){
        return NextResponse.json({message: "User deleted"}, {status: 201})
    }else{
        return NextResponse.json(
            { message: "Something went wrong..." },
            { status: 500 }
        );
    }
}
