const mongoose = require("mongoose");

//Schema Design.....!
const basicinformationSchema = mongoose.Schema({
  partnername: {
    type: String,
    required: [true, "Please provide a Partner Name!"],
    minLength: [5, "Name must be at least 3 character!"],
    maxLength: [100, "Name is to large!"]
  },
  joining: {
    name: String,
    birthDate: { type: Number, default: Date.now }
  },
  accountnumber: {
    type: Number,
    required: [true, "Please provide a Account Number"]
  },
  partnertype: {
    type: String,
    required: [true, "Please provide a Partner Type"],
    enum: {
      values: ["IGW","ICX","IOS","ANS","INT"]
    }
  },
  currency: {
    type: String,
    required: [true, "Please provide a Currency"],
    enum: {
      values: ["BDT","USD"]
    }
  },
  timezone: {
    type: String,
    required: [true, "Please provide TimeZone"],
    enum: {
      values: ["Eastern Standard Time (EST)","Central Standard Time (CST)","Mountain Standard Time (MST)","India Standard Time (IST)","China Standard Time (CST)"]
    }
  },
  timebillingcyclezone: {
    type: String,
    required: [true, "Please provide TimeZone"],
    enum: {
      values: ["Monthly","Weekly","Yearly"]
    }
  },
  status: {
    type: String,
    required: [true, "Please you have status this info"],
    enum: {
      values: ["Active","Inactive","Suspended"],
      message: "Status can't"
    }
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  PartnerDetails: [{ _id: mongoose.Schema.Types.ObjectId }],
  AccoutManagerInfo: [{ _id: mongoose.Schema.Types.ObjectId }]
},{timestamp: true});

//Create Model.....!
const Basicinformation = mongoose.model("Basicinformation", basicinformationSchema);

module.exports = Basicinformation;