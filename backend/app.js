const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

//Product Route....!
const basicRoute = require('./routes/basicinformation.route');
app.use('/api/v1/basicinfo', basicRoute);

//Test Route
app.get("/", (rep, res) => {
  res.send("Route is working! YaY@");
});

module.exports = app;