const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

//Test Route
app.get("/", (rep, res) => {
  rep.send("Route is working! YaY");
});

module.exports = app;