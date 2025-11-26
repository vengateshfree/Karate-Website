import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactModel from "../../models/Contact";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json(); // Get body
    const { name, phone, email, message } = body;

    const contact = await ContactModel.create({
      name,
      phone,
      email,
      message,
    });

    return NextResponse.json(
      { status: "success", data: contact },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 400 }
    );
  }
}
