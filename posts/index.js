const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/create", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  axios
    .post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: { id, title },
    })
    .catch((err) => {
      console.log(err.message);
    });

  return res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log(req.body.type);
  return res.send({});
});

app.listen(4000, () => {
  console.log("V45");
  console.log("Listening on port 4000");
});
