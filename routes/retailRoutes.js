//adding update routes
const express = require('express')
const router = express.Router();

// Product Model
const Repair_details = require('../models/requests');


// @route PUT api/repair/:id
// @desc  Update a retail repair item

router.put('/:id', (req,res)=>{

   // Update a product in the database

   Repair_details.updateOne({_id:req.params.id},{

       state: req.body.state,
       comments: req.body.comments,
       receipt: req.body.receipt,

   }, {upsert: true}, (err)=>{

       if(err) console.log(err);
       res.json({success:true})

   })

})

module.exports = router;