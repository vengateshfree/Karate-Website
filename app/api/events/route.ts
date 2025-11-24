import { connectDB } from "@/lib/mongodb";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const db = await connectDB();

    const searchParams = request.nextUrl.searchParams;

    const limit = parseInt(searchParams.get("limit") || "10");
    const page = parseInt(searchParams.get("page") || "1");
    const eventtype = searchParams.get("eventtype") || "all";

    const query: any = {};
    if (eventtype !== "all") query.eventtype = eventtype;

    const count = await db.collection("events").countDocuments(query);

    const events = await db
      .collection("events")
      .find(query)
      .skip(limit * (page - 1))
      .limit(limit)
      .toArray();

    return Response.json({
      status: "success",
      data: events,
      count,
    });
  } catch (error: any) {
    return Response.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
