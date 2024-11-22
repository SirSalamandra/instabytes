import express from "express";
import { getPostsList } from "../controllers/postsController.ts";

const routes = (app: express.Express) => {
  app.use(express.json());

  app.get("/posts", getPostsList)
}

export default routes;