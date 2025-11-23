import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please add MONGO_URI to your .env");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return mongoose.connection; // return existing connection
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, {
      dbName: "FoodDeliveryApp",
    });

    isConnected = db.connections[0].readyState === 1;

    return db.connection; // this is the actual connection object
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
}
