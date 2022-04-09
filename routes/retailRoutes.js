const express = require('express');
const router = express.Router();

//requests model
const Request = require('../models/requests');

// @route GET /requests

// @desc Get ALL requests

router.get('/', (req,res)=>{

    // Fetch all request from database

    Request.find({},(error, data)=>{
 
        if (error) console.log(error)
        res.json(data)
 
    })
 
 })



 module.exports = router;