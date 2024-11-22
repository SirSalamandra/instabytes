import express from "express";
import cors from "cors";
import upload from "../configs/molterConfig.ts";
import { createNewPost, getPostsList, uploadImage, updatePostById } from "../controllers/postsController.ts";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
};

const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(cors(corsOptions));

  app.get("/posts", getPostsList);
  app.post("/posts", createNewPost);
  app.post("/upload", upload.single("image"), uploadImage);
  app.put("/upload/:id", updatePostById);
}

export default routes;