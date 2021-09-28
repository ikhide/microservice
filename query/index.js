const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const axios = require("axios");

const cors = require("cors");
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  if (type === "PostCreated") {
    const { title, id } = data;
    posts[id] = { id, title, comments: [] };
  } else if (type === "CommentCreated") {
    const { content, postId, id, status } = data;
    posts[postId].comments.push({ id, content, status });
  } else if (type === "CommentUpdated") {
    const { content, postId, id, status } = data;
    const comment = posts[postId].comments.find((comment) => comment.id === id);
    comment.status = status;
    comment.content = content;
  }
};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

app.listen(4002, async () => {
  console.log("Running on 4002");
  const res = await axios.get("http://event-bus-srv:4005/events");

  for (let event of res.data) {
    handleEvent(event.type, event.data);
  }
});
