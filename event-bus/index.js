const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);

  axios.post("http://posts-clusterip-srv:4000/events", event).catch(() => {
    console.log("Something wrong with 4000");
  });
  // axios.post("http://localhost:4001/events", event).catch(() => {
  //   console.log("Something wrong with 4001");
  // });
  // axios.post("http://localhost:4002/events", event).catch(() => {
  //   console.log("Something wrong with 4002");
  // });
  // axios.post("http://localhost:4003/events", event).catch(() => {
  //   console.log("Something wrong with 4003");
  // });

  res.status(201).send({ status: "OK" });
});

app.get("/events", (req, res) => {
  console.log("Send events", events)
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
