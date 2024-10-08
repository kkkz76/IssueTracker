import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";


interface Props{
    params: {id:string}
}

export async function GET(request:NextRequest ,{params : {id}} : Props) {
    
    try {
        const userObj = await prisma.user.findUnique({
            where: { id: parseInt(id)}, 
        });

        if (!userObj) {
            return NextResponse.json({ error: "User Not Found" }, { status: 404 });
        }
        return NextResponse.json(userObj, { status: 200 });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(request:NextRequest , {params : {id}} : Props) {

    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status : 400});

    try {
        const userObj = await prisma.user.findUnique({
            where : {
                id : parseInt(id)
            }
        });
    
        if(!userObj)
            return NextResponse.json({error : 'User not found'}, {status : 404});
    
        const updatedUser = await prisma.user.update({
            where : {
                id : userObj.id
            },
            data : {
                name : body.name,
                email : body.email
            }
        });

        return NextResponse.json(updatedUser)
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }  
    
}

export async function DELETE(request:NextRequest ,{params :{id}}: Props){

    try {
        const userObj = await prisma.user.findUnique({
            where : {
                id : parseInt(id)
            }
        });

        if(!userObj)
            return NextResponse.json({error : 'User not found'}, {status : 404})

        await prisma.user.delete({
            where : {
                id : parseInt(id)
            }
        });

        return NextResponse.json({});

    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}