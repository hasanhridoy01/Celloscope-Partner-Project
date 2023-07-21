const mongoose = require("mongoose");

//Schema Design.....!
const basicinformationSchema = mongoose.Schema({
  partnername: {
    type: String,
    required: [true, "Please provide a Partner Name!"],
    trim: true,
    unique: [true, "Name must be unique"],
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
    type: Object,
    required: [true, "Please provide a Partner Type"]
  },
  currency: {
    type: Object,
    required: [true, "Please provide a Currency"]
  },
  timezone: {
    type: Object,
    required: [true, "Please provide TimeZone"]
  },
  timebillingcyclezone: {
    type: Object,
    required: [true, "Please provide TimeZone"]
  },
  status: {
    type: Object,
    required: [true, "Please you have status this info"],
    enum: {
      values: ["active","inactive","suspended"],
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