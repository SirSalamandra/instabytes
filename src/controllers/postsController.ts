import express from "express";
import fs from "fs";

import { getAllPosts, createPost, updatePost } from "../models/postsModel.ts";
import gerarDescricaoComGemini from "../services/geminiServices.ts";

export const getPostsList = async (req: express.Request, res: express.Response) => {
  const posts = await getAllPosts();
  res.status(200).json(posts)
}

export const createNewPost = async (req: express.Request, res: express.Response) => {
  const newPost = req.body;

  try {
    const createdPost = await createPost(newPost);
    res.status(200).json(createdPost);
  }
  catch (error: any) {
    console.error(error.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export const uploadImage = async (req: express.Request, res: express.Response) => {
  const newPost = {
    description: "Gato Padeiro",
    imgUrl: req.file?.originalname,
    alt: ""
  }

  try {
    const createdPost = await createPost(newPost);

    const imageCreated = `uploads/${createdPost.insertedId}.png`;

    fs.renameSync(req.file!.path, imageCreated);

    res.status(200).json(createdPost);
  }
  catch (error: any) {
    console.error(error.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}

export const updatePostById = async (req: express.Request, res: express.Response) => {
  const postId = req.params.id;
  const urlImg = `http://localhost:3000/${postId}.png`;

  try {
    const imageBuffer = fs.readFileSync(`uploads/${postId}.png`);
    const description = await gerarDescricaoComGemini(imageBuffer);

    const post = {
      description: description,
      imgUrl: urlImg,
      alt: req.body.alt
    }

    const createdPost = await updatePost(postId, post);
    res.status(200).json(createdPost);
  }
  catch (error: any) {
    console.error(error.message);
    res.status(500).json({ Erro: "Falha na requisição" });
  }
}