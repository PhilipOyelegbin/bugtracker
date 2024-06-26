import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        const [id] = req.params
        if(!id) return NextResponse.json({"message": "Error", error}, {"status": 403})
        const body = req.json();
        const result = await prisma.issue.create(body)
        return NextResponse.json({"message": "Saved successfully"}, {"status": 200})
    } catch (error) {
        return NextResponse.json({"message": "Error", error}, {"status": 500})
    }
    
}

export async function GET(req) {
    try {
        const [id] = req.params
        if(!id) return NextResponse.json({"message": "Error", error}, {"status": 403})
        const result = await prisma.issue.findOne(id) 
        return NextResponse.json({result}, {"status": 200})
    } catch (error) {
        return NextResponse.json({"message": "Error", error}, {"status": 500})
    }  
}