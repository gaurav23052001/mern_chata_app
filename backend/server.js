const express = require("express");
const app = express();
const chat = require("./data/data");

app.get("/hello", (req, res) => {
  res.json({
    message: "hello is working",
  });
});

app.get("/api/chat", (req, res) => {
  console.log(chat);
  res.send(chat);
});

app.listen(5000, () => {
  console.log("runnning on port 5000");
});
