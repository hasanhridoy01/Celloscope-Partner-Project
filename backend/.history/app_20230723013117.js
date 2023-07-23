const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

//middleware
app.use(express.json());
app.use(cors());

//Verify JwtToken....!
const VerifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  //verify auth....!
  if(!authHeader){
    res.status(401).send({message: 'unAuthorize access'});
  }
  //if have a authorization headers.....!
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(error, decoded){
    if(error){
      res.status(401).send({message: 'unAuthorize access'});
    }
    req.decoded = decoded;
    next();
  });
}

//JsonWebToken Route....!
app.post('/jwt', (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
  res.send({token});
});

//BasicInfo Route....!
const basicRoute = require('./routes/basicinformation.route');
app.use('/api/v1/basicinfo', VerifyJWT, basicRoute)

//PartnerDetails Route....!
const partnerdetailsRoute = require('./routes/partnerdetails.route');
app.use('/api/v1/partnerdetails', VerifyJWT, partnerdetailsRoute);

//AccountManagerInfo Route....!
const accountmanagerinfoRoute = require('./routes/accountmanager.route');
app.use('/api/v1/accountmanagerinfo', VerifyJWT, accountmanagerinfoRoute);

//Search Route.....!

//Test Route
app.get("/", (rep, res) => {
  res.send("Route is working! YaY@");
});

module.exports = app;