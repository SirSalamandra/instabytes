import express from 'express';

const posts = [
  {
    description: "Uma foto",
    image: "https://placecats.com/millie/300/150",
    id: 1
  },
  {
    description: "Paisagem montanhosa",
    image: "https://picsum.photos/seed/picsum/200/300",
    id: 2
  },
  {
    description: "Paisagem montanhosa",
    image: "https://picsum.photos/seed/picsum/200/300",
    id: 3
  }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts)
})

const buscarIndexPostPorId = (id: number) => {
  return posts.findIndex((post) => {
    return post.id === id
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarIndexPostPorId(Number(req.params.id));
  res.status(200).json(posts[index]);
})