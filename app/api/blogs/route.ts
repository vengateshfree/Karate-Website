import { connectDB } from "@/lib/mongodb";

const MONGODB_URI = process.env.MONGO_URI as string;

export async function GET(request: Request) {
  try {
    const db = await connectDB();

    // Read query params (?limit=10&page=1)
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const page = parseInt(searchParams.get("page") || "1");

    // Count documents
    const count = await db.collection("blogs").countDocuments();

    // Fetch paginated blogs
    const blogs = await db
      .collection("blogs")
      .find()
      .skip(limit * (page - 1))
      .limit(limit)
      .toArray();

    return Response.json({
      status: "success",
      data: blogs,
      count,
    });
  } catch (error: any) {
    return Response.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
