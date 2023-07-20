const mongoose = require("mongoose");

//Schema Design.....!
const AccoutManagerInfoSchema = mongoose.Schema({
    managerID: {
    name: Number,
    require: [true, "Please provide a Manager ID"]
  },
  managername: {
    type: String,
    required: [true, "Please provide a Manager Name"],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [5, "Name must be at least 3 character!"],
    maxLength: [100, "Name is to large!"]
  },
  managerphone: {
    type: number,
    required: [true, "Please provide a Manager Phone!"]
  },
  manageremail: {
    name: String,
    require: [true, "Please provide Manager E-mail"],
  },
  systementrydate: {
    name: String,
    require: [true, "Please provide System Entry Date"],s
    birthDate: { type: Number, default: Date.now }
  },
  createAt: {
    type: Date,
    default: Date.now,
  }
},{timestamp: true});

//Create Model.....!
const AccoutManagerInfo = mongoose.model("AccoutManagerInfo", AccoutManagerInfoSchema);

module.exports = AccoutManagerInfo;