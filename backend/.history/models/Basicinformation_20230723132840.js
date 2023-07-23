const mongoose = require("mongoose");

//Schema Design.....!
const basicinformationSchema = mongoose.Schema({
  partnername: {
    type: String,
    required: [true, "Please provide a Partner Name!"]
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
  partnerDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PartnerDetails' }],
  accountManagerInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AccountManagerInfo' }]
},{timestamp: true});

//Create Model.....!
const Basicinformation = mongoose.model("Basicinformation", basicinformationSchema);

module.exports = Basicinformation;