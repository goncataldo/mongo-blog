import { MongoClient, ServerApiVersion } from "mongodb";

const cluster = process.env.DB_CLUSTER;
const password = process.env.DB_PASSWORD;
const id = process.env.DB_ID;

const uri = `mongodb+srv://${cluster}:${password}@${cluster}.${id}.mongodb.net/?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
