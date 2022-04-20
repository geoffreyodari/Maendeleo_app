const express = require('express')
const router = express.Router();
const Repair_details = require('../models/requests');


// @route PUT retail/:id
// @desc  Update a retail repair item
   router.put('/:id',(req,res)=>{
     
    let update = {
        Issues: {
            item: req.body.Issues[0].item
        },                 
        status: {
            timestamp: new Date(),    
            state: req.body.status[0].state,
            comments: req.body.status[0].comments
        },
        waybill_to_repair: req.body.waybill_to_repair,
        waybill_to_retail: req.body.waybill_to_retail

       };
               
        Repair_details.updateOne({_id:req.params.id},{$set:update},
            {upsert:true},
            (err,success)=>(err)?res.json(err):res.json({success}))
    
})


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


// @route GET /requests/:id
// @desc  get a single request based on ID

 router.get('/:id', (req,res)=>{

    // Fetch all request from database

    Request.findOne({_id:req.params.id},(error, data)=>{
 
        if (error) console.log(error)
        res.json(data)
 
    })
 
 })



 module.exports = router;

