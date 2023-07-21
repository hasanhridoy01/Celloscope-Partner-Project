const AccoutManagerInfo = require('../models/AccoutManagerInfo');

//Get all AccoutManagerInfo from Database...............!
exports.getAccoutManagerInfo = async(req, res, next) => {
  try {
    const accoutManagerInfo = await AccoutManagerInfo.find({});
    //Response Send a message with user...!
    res.status(200).json({
      status: 'Successful!',
      message: 'your info has been taken',
      data: accoutManagerInfo
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

//Create a new AccoutManagerInfo form Database.............!
exports.createAccoutManagerInfo = async(req, res, next) => {
  try {
    //Create or Save..!
    const accoutManagerInfo = new AccoutManagerInfo(req.body);
    //Save Data from Database..!
    const result = await accoutManagerInfo.save();
    //Response Send a message with user...! 
    res.status(200).json({
      status: "Successful!",
      message: "Data Inserted SuccessFul!",
      data: result
    });
  } catch (error) {
    //If any Error Send a message with user...!
    console.log(error);
    // res.status(400).json({
    //   status: "Failed!",
    //   message: "Data Inserted UnSuccessful!",
    //   error: error.message
    // });
  }
};