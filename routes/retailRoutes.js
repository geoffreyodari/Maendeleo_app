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




// @route PUT retail/:id
// @desc  Update a retail repair item
   router.put('/:id',(req,res)=>{

    var i = 0;
    //for (i=0; i<req.body.Issues.length; i++){
        //console.log(req.body.Issues[i].item)
        
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
        waybill_to_repair: req.body.waybill_to_repair,
        waybill_to_retail: req.body.waybill_to_retail
       }  
        Repair_details.findOneAndUpdate({_id:req.params.id},{$set:update},
            {upsert:true},
            (err,success)=>(err)?res.json(err):res.json({success}))

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

    // Fetch all request from database

    Request.findOne({_id:req.params.id},(error, data)=>{
 
        if (error) console.log(error)
        res.json(data)
 
    })
 
 })

 module.exports = router;

