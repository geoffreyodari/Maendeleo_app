const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let statusSchema = new Schema   ({
    timestamp: {type:Date,default: Date()},
    state: String,
    comments: String
    
})
let issuesSchema = new Schema({ 
    item: String 
})
let retailUpdate = new Schema({
        issues:[issuesSchema],
        status:[statusSchema]
 })

 let Retail_updates = mongoose.model('service_request', retailUpdate)
 
 module.exports = Retail_updates;