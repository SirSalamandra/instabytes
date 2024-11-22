import 'dotenv/config';
import { ObjectId } from "mongodb";
import connectToDatabase from "../configs/dbConfig.ts";

const connection = await connectToDatabase(process.env.CONNECTION_STRING as string);

export const getAllPosts = async () => {
  const db = connection.db("instabytes");
  const collection = db.collection("posts");

  return collection.find().toArray();
}

export const createPost = async (newPost: any) => {
  const db = connection.db("instabytes");
  const collection = db.collection("posts");

  return collection.insertOne(newPost);
}

export const updatePost = async (id: string, post: any) => {
  const db = connection.db("instabytes");
  const collection = db.collection("posts");

  const objId = ObjectId.createFromHexString(id);
  return collection.updateOne({ _id: new ObjectId(objId) }, { $set: post });
}