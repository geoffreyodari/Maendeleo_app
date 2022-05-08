const express = require('express')
const router = express.Router();
const Repair_details = require('../models/requests');
//requests model
const Request = require('../models/requests');


// @route POST /requests/
// @desc  Post a single request 

router.post('/',(req,res)=>{
    let newRequest = new Request(req.body)
    newRequest.save((err,success)=> {(!err)? res.json(success):res.json(err);
      })
    
})


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

    // Fetch a single request based on request ID

    Request.findById({_id:req.params.id},(error, data)=>{
 
        if (error) console.log(error)
        res.json(data)
 
    })
 
 })

 // @route GET /requests/phone/:phone
// @desc  Fetch all requests based on customer's phone number

router.get('/phone/:phone', (req,res)=>{

    // Fetch all request from database based on customer's phone number
 
     Request.find({ phone:req.params.phone},(error, data)=>{
 
    (error)? console.log(error):res.json(data)
 
    })
 
 })


 // @route GET /requests/national_id/:id
// @desc  get requests based on customer's national id

router.get('/national_id/:id', (req,res)=>{

    // Fetch all request from database based on customer's national id
 
     Request.find({ national_id:req.params.id},(error, data)=>{
 
    (error)? console.log(error):res.json(data)
 
    })
 
 })


 // @route GET /requests/imei/:id
// @desc  get requests based on device imei

router.get('/imei/:id', (req,res)=>{

    // Fetch all request from database based on device IMEI
 
     Request.find({ imei:req.params.id},(error, data)=>{
 
    (error)? console.log(error):res.json(data)
 
    })
 
 })

 // @route PUT retail/:id
// @desc  Update a retail repair item and status
router.put('/issues/:id',(req,res)=>{

    var i = 0;

    let update = {
        Issues: {
            item: req.body.Issues[i].item,
            item: req.body.Issues[i].item
        },                 
        status: {
            timestamp: new Date().toString(),    
            state: req.body.status[i].state,
            comments: req.body.status[i].comments
        },
       }  
        Repair_details.findOneAndUpdate({_id:req.params.id},{$set:update},
            {upsert:true},
            (err,success)=>(err)?res.json(err):res.json({success}))

})

// @route PUT retail/:id
// @desc  Update a waybill number
router.put('/waybill/:id',(req,res)=>{

    let update = {
        
        waybill_to_repair: req.body.waybill_to_repair,
        waybill_to_retail: req.body.waybill_to_retail
       }  
        Repair_details.findOneAndUpdate({_id:req.params.id},{$set:update},
            {upsert:true},
            (err,success)=>(err)?res.json(err):res.json({success}))

})


 module.exports = router;

