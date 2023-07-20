const mongoose = require("mongoose");

//Schema Design.....!
const basicinformationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this product!"],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be at least 3 character!"],
    maxLength: [100, "Name is to large!"]
  },
  description: {
    type: String, 
    required: [true, "Please provide a some text with description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a minimum-maximum price on your product"],
    min: [0, "Price can't be negative!"],
  },
  unit: {
    type: String,
    required: [true, "Please provide a some unit for product"],
    enum: {
      values: ["kg","liter","pcs"],
      message: "unit value can't be {VALUE}, must be kg/liter/pcs"
    }
  },
  quantity: {
    type: Number,
    required: [true, "Please provide a quantity for your product"],
    min: [0, "Quantity can't be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        //condition
        if(isInteger){
          return true
        }else{
          return false
        }
      }
    },
    message: "Quantity must be an integer!",
  },
  status: {
    type: String,
    required: [true, "Please you have status for your product"],
    enum: {
      values: ["in-stock","out-of-stock","discontinued"],
      message: "Status can't br {VALUE}"
    }
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  // supplier: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Supplier"
  // },
  // Categories: [{
  //   name: {
  //     type: String,
  //     required: [true, "Please provide a Categories name"]
  //   },
  //   _id: mongoose.Schema.Types.ObjectId
  // }]
},{timestamp: true});

//Create Model.....!
const Basicinformation = mongoose.model("Basicinformation", basicinformationSchema);

module.exports = Basicinformation;