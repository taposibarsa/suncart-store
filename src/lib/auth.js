import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.AUTH_DB_URI?.trim();
if (!uri) {
  throw new Error("AUTH_DB_URI is not set.");
}

/** Reuse one client across Vercel serverless invocations (see MongoDB + Vercel connection notes). */
const globalForMongo = globalThis;
function getMongoClient() {
  if (!globalForMongo.__betterAuthMongoClient) {
    globalForMongo.__betterAuthMongoClient = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10_000,
      maxPoolSize: 10,
    });
  }
  return globalForMongo.__betterAuthMongoClient;
}

const client = getMongoClient();
const db = client.db("betterAuthUserDB");

const googleId = process.env.GOOGLE_CLIENT_ID?.trim();
const googleSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  advanced: {
    ...(process.env.VERCEL ? { trustedProxyHeaders: true } : {}),
  },

  database: mongodbAdapter(db, { client }),

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  socialProviders: {
    ...(googleId && googleSecret
      ? {
          google: {
            clientId: googleId,
            clientSecret: googleSecret,
          },
        }
      : {}),
  },
});