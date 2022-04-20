
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
    Timestamp: {type:Date,default: Date()},
    Name: String,
    phone: String,
    email: String,
    national_id: String,
    model: String,
    imei: String,
    serial: String,
    receipt: String,
    warranty: Boolean,
    physical_condition: String,
    Issues:[issuesSchema],
    retail_centre: String,
    repair_centre: String,
    waybill_to_repair: String,
    waybill_to_retail: String,
    status:[statusSchema]    
        
 })

 let Request = mongoose.model('service_request', retailUpdate)

module.exports = Request;

