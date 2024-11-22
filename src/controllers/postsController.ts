import { getAllPosts } from "../models/postsModel.ts";

export const getPostsList = async (req: any, res: any) => {
  const posts = await getAllPosts();
  res.status(200).json(posts)
}