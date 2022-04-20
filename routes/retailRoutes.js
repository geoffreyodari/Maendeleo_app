//adding update routes
const express = require('express')
const router = express.Router();

// Product Model
const Repair_details = require('../models/requests');


// @route PUT api/repair/:id
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
        }
       };
               
        Repair_details.updateOne({_id:req.params.id},{$set:update},
            {upsert:true},
            (err,success)=>(err)?res.json(err):res.json({success}))
    
})

module.exports = router;