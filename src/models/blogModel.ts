import { client } from "../config/database";

const db = client.db("gonza-blog");
export const blogs = db.collection("blogs");
