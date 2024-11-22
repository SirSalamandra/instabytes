import connectToDatabase from "../configs/dbConfig.ts";

const connection = await connectToDatabase(process.env.CONNECTIONSTRING as string);

export const getAllPosts = async () => {
  const db = connection.db("instabytes");
  const collection = db.collection("posts");

  return collection.find().toArray();
}