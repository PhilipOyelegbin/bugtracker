import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json()
        console.log(body)
        const result = await prisma.issue.create({data: body})
        return NextResponse.json({"message": "Saved successfully"}, {"status": 200})
    } catch (error) {
        return NextResponse.json({"message": "Error", error}, {"status": 500})
    }  
}

export async function GET() {
    try {
        const result = await prisma.issue.findMany() 
        return NextResponse.json({result}, {"status": 200})
    } catch (error) {
        return NextResponse.json({"message": "Error", error}, {"status": 500})
    }  
}