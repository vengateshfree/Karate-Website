import { connectDB } from "@/lib/mongodb";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { limit: string; page: string; eventtype: string } }
) {
  try {
    const db = await connectDB();

    const limit = parseInt(params.limit);
    const page = parseInt(params.page);
    const eventtype = params.eventtype;

    const query: any = {};
    if (eventtype !== "all") {
      query.eventtype = eventtype;
    }

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
