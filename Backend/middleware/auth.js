const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/userSchema");

exports.auth = (req, res, next) =>{
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication"})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: "Invalid Authentication"})

            req.user = user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}


exports.isFesthead = async (req, res, next) => {
    try{
           if(req.user.accountType !== "FestHead") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Festhead only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }

   exports.PRHead = async (req, res, next) => {
    try{
           if(req.user.accountType !== "PRHead") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for PRhead only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }



  exports.SponsorshipHead = async (req, res, next) => {
    try{
           if(req.user.accountType !== "SponsorshipHead") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Sponsorhiphead only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }

   exports.LogisticHead = async (req, res, next) => {
    try{
           if(req.user.accountType !== "LogisticHead") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Logistichead only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }


   exports.AccomodationHead = async (req, res, next) => {
    try{
           if(req.user.accountType !== "AccomodationHead") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for accomodationhead only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }

   exports.EventHead = async (req, res, next) => {
    try{
           if(req.user.accountType !== "EventHead") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Eventhead only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }