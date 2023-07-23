const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
 
//require app page
const app = require("./app");

//Database Connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection is successful!`.red.bold);
});

//server
const port = process.env.PORT || 8080;

//listening 
app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});