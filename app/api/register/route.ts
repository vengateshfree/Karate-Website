import { NextRequest, NextResponse } from "next/server";
import register from "../../models/Register";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const registration = await register.create(body);

    return NextResponse.json(registration, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
