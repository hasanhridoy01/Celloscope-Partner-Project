const Basicinformation = require('../models/Basicinformation');

//Search Basic info from Database...!
exports.searchInfo = async(req, res) => {
    //Get id.....!
    const data = req.params;
    console.log(data); 
  
    // try {
    //   const basicinformation = await Basicinformation.deleteOne({ _id: id });
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
    // };
  };