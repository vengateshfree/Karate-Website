import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectDB();

    const collection = db.collection("tournaments"); // EXACT NAME in MongoDB

    const count = await collection.countDocuments();
    const tournaments = await collection.find().toArray();

    return Response.json({
      status: "success",
      data: tournaments,
      count,
    });
  } catch (err: any) {
    return Response.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}
