import { connectDB } from "@/lib/mongodb";
import { NextRequest } from "next/server";

export async function GET(request = NextRequest) {
  try {
    const db = await connectDB();

    // Read query params (?limit=10&page=1)
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const page = parseInt(searchParams.get("page") || "1");

    // Count total blogs
    const count = await db.collection("blogs").countDocuments();

    // Fetch paginated blogs
    const blogs = await db
      .collection("blogs")
      .find({})
      .skip(limit * (page - 1))
      .limit(limit)
      .toArray();

    return Response.json({
      status: "success",
      data: blogs,
      count,
      page,
      limit,
    });
  } catch (error) {
    return Response.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
