import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  console.warn("⚠️ MONGO_URI is missing! Add it in Vercel Environment Variables.");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return mongoose.connection;

  try {
    const db = await mongoose.connect(MONGODB_URI!, {
      dbName: "FoodDeliveryApp",
    });

    isConnected = db.connections[0].readyState === 1;
    return db.connection;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
}
