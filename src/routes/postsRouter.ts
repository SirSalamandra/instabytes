import express from "express";
import upload from "../configs/molterConfig.ts";
import { createNewPost, getPostsList, uploadImage } from "../controllers/postsController.ts";

const routes = (app: express.Express) => {
  app.use(express.json());

  app.get("/posts", getPostsList);
  app.post("/posts", createNewPost);
  app.post("/upload", upload.single("image"), uploadImage);
}

export default routes;