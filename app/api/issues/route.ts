import { issueSchema } from "@/app/validationSchema";
import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/prisma/client";

export async function POST(request: Request) {
    const body = await request.json();
    // const validation = issueSchema.safeParse(body);
    // if(!validation.success)
    //     return NextResponse.json(validation.error.format(), {status: validation.error.status})
}