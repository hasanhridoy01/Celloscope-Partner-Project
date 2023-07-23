const PartnerDetails = require('../models/PartnerDetails');

//Get all PartnerDetails from Database...............!
exports.getPartnerDetails = async(req, res, next) => {
  // try {
  //   const basicinformation = await Basicinformation.find({});
  //   //Response Send a message with user...!
  //   res.status(200).json({
  //     status: 'Successful!',
  //     message: 'your info has been taken',
  //     data: basicinformation
  //   });
  // } catch (error) {
  //   //If any Error Send a message with user...!
  //   res.status(400).json({
  //     status: 'Failed',
  //     message: "your don't find the info",
  //     error: error.message
  //   });
  // }
  res.status(400).json({
    status: 'PartnerDetails',
    message: "your don't find the info",
  });
};

//Create a new PartnerDetails form Database.............!
exports.createPartnerDetails = async(req, res, next) => {
  try {
    //Create or Save..!
    const partnerDetails = new PartnerDetails(req.body);
    //Save Data from Database..!
    const result = await partnerDetails.save();
    //Response Send a message with user...! 
    res.status(200).json({
      status: "Successful!",
      message: "Data Inserted SuccessFul!",
      data: result
    });
  } catch (error) {
    //If any Error Send a message with user...!
    res.status(400).json({
      status: "Failed!",
      message: "Data Inserted UnSuccessful!",
      error: error.message
    });
  }
};