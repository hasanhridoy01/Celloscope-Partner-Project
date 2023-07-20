const mongoose = require("mongoose");

//Schema Design.....!
const PartnerDetailsSchema = mongoose.Schema({
    partnerphonenumber: {
    type: Number,
    required: [true, "Please provide a Partner Phone Number!"],
    trim: true,
    unique: [true, "Partner Phone Number must be unique"],
    minLength: [11, "Partner Phone Number must be at least 11 character!"],
    maxLength: [100, "Partner Phone Number is to large!"]
  },
  partneremailaddress: {
    name: String,
    require: [true, "Please provide Partner Email address"],
  },
  partnernotificationemail: {
    name: String,
    require: [true, "Please provide Partner Notification E-mail"],
  },
  VATregnumber: {
    type: number,
    required: [true, "Please provide a VAT Reg Number"]
  },
  currencyrate: {
    type: String,
    required: [true, "Please provide a Currency Rate"]
  },
  contactaddress: {
    type: String,
    required: [true, "Please provide a Contact Address"]
  },
  billingaddress: {
    type: String,
    required: [true, "Please provide a Billing Address"]
  },
  createAt: {
    type: Date,
    default: Date.now,
  }
},{timestamp: true});

//Create Model.....!
const PartnerDetails = mongoose.model("PartnerDetails", PartnerDetailsSchema);

module.exports = PartnerDetails;