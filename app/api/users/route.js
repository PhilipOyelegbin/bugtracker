import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = req.json();
        const result = await prisma.user.create(body)
        return NextResponse.json({"message": "Saved successfully"}, {"status": 200})
    } catch (error) {
        return NextResponse.json({"message": "Error", error}, {"status": 500})
    }
    
}

export async function GET() {
    try {
        const result = await prisma.user.findMany() 
        return NextResponse.json({result}, {"status": 200})
    } catch (error) {
        return NextResponse.json({"message": "Error", error}, {"status": 500})
    }  
}