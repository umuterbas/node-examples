const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.render("home", {
    title: "Another Title",
    users: [{ name: "Arthur" }, { name: "Kento" }, { name: "Nicolo" }],
  });
});

server.post("/user", (req, res) => {
  console.log("body", req.body);
  res.redirect("/");
});

server.listen(3000, () => console.log("server running on port 3000"));
