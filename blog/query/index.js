const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require('axios')
const cors = require('cors')

const app = express();

const posts = {}


app.use(bodyParser.json());
app.use(cors());

app.post("/events", (req, res) => {
  const {type, data} = req.body;

  if(type === 'PostCreated'){
    const { id, title } = data
    posts[id] = {id, title, comments: []}
  }

  if(type === 'CommentCreated'){
    const { id, content, postId } = data
    const post = posts[postId]
    post.comments.push({ id, content})
  }
console.log(posts)
  res.status(201).send({ status: "OK" });
});

app.get("/posts", (req, res) => {
  res.status(201).send({ posts });
});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
