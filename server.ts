import express from 'express';
import routes from './src/routes/postsRouter.ts';

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando");
});

// const buscarIndexPostPorId = (id: number) => {
//   return posts.findIndex((post) => {
//     return post.id === id
//   })
// }

// app.get("/posts/:id", (req, res) => {
//   const index = buscarIndexPostPorId(Number(req.params.id));
//   res.status(200).json(posts[index]);
// })