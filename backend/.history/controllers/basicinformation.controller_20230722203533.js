const Basicinformation = require('../models/Basicinformation');

//Get all info from Database...............!
exports.getInfo = async(req, res, next) => {
  try {
    const basicinformation = await Basicinformation.find({});
    //Response Send a message with user...!
    res.status(200).json({
      status: 'Successful!',
      message: 'your info has been taken',
      data: basicinformation
    });
  } catch (error) {
    //If any Error Send a message with user...!
    res.status(400).json({
      status: 'Failed',
      message: "your don't find the info",
      error: error.message
    });
  };
};

//Create a new info form Database.............!
exports.createInfo = async(req, res, next) => {
  try {
    //Create or Save..!
    const basicinformation = new Basicinformation(req.body);
    //Save Data from Database..!
    const result = await basicinformation.save();
    //Response Send a message with user...! 
    res.status(200).json({
      status: "Successful!",
      message: "Data Inserted SuccessFul!",
      data: result
    });
  } catch (error) {
    //If any Error Send a message with user...!
    console.log(error)
    res.status(400).json({
      status: "Failed!",
      message: "Data Inserted UnSuccessful!",
      error: error.message
    });
  };
};

//Update Basic info from Database...!
exports.getupdateInfo = async(req, res, next) => {
  //Get id.....!
  const id = req.params.id;

  try {
    const basicinformation = await Basicinformation.find({ _id: id });
    //Response Send a message with user...!
    res.status(200).json({
      status: 'Successful!',
      message: 'your info has been taken',
      data: basicinformation
    });
  } catch (error) {
    //If any Error Send a message with user...!
    res.status(400).json({
      status: 'Failed',
      message: "your don't find the info",
      error: error.message
    });
  };
};

//Delete Basic info from Database...!
exports.deleteInfo = async(req, res, next) => {
  //Get id.....!
  const id = req.params.id;

  try {
    const basicinformation = await Basicinformation.deleteOne({ _id: id });
    //Response Send a message with user...!
    res.status(200).json({
      status: 'Successful!',
      message: 'your info has been taken',
      data: basicinformation
    });
  } catch (error) {
    //If any Error Send a message with user...!
    res.status(400).json({
      status: 'Failed',
      message: "your don't find the info",
      error: error.message
    });
  };
};