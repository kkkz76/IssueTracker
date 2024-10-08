import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";
import { number } from "zod";


interface Props{
    params: {id:string}
}

export async function GET(request: Request,{params} : Props) {
    
    try {
        const userObj = await prisma.user.findUnique({
            where: { id: parseInt(params.id)}, 
        });

        if (!userObj) {
            return NextResponse.json({ error: "User Not Found" }, { status: 404 });
        }
        return NextResponse.json(userObj, { status: 200 });
    } catch (error) {
        console.error(params.id ,typeof params.id)
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// export async function PUT(request:NextRequest , {params : {id}} : Props) {

//     const body = await request.json();
//     const validation = schema.safeParse(body);
//     if(!validation.success)
//         return NextResponse.json(validation.error.errors, {status : 400})

//     if(id > 10)
//         return NextResponse.json({error : 'User not found'}, {status : 404})

//     return NextResponse.json({id:1,name : body.name})
    
// }

// export function DELETE(request : NextRequest , {params :{id}}: Props){
//     if(id > 10)
//         return NextResponse.json({error : 'User not found'}, {status : 404})

//     return NextResponse.json({})
// }