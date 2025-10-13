import { MongoClient } from "mongodb";
const uri = process.env.DATABASE_URL;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) throw new Error("Missing DATABASE_URL");

if (process.env.NODE_ENV === "development") {
  // global var hack for dev
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
