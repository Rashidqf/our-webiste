import mongoose from "mongoose";
const dns = require("dns");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI && process.env.NODE_ENV === "development") {
  console.warn(
    "[mongodb] MONGODB_URI is not set. Blog API and SSR pages will fail until you configure it.",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Cached connection for Next.js serverless — avoids exhausting Atlas connection limits.
 * @see https://mongoosejs.com/docs/lambda.html
 */
export default async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }
  dns.setServers(['127.0.0.1','8.8.8.8'] );
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10_000,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
