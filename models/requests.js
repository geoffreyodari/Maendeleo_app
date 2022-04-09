const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let StatusSchema = new Schema   ({
                                timestamp: String,
                                state: String,
                                comments: String
                                
                                })

let IssuesSchema = new Schema   (  { item: String } )


let requestSchema = new Schema(
                                {   
                                    timestamp:Date, 
                                    name:String,
                                    phone:String,
                                    email:String,
                                    national_id:String,
                                    model:String,
                                    imei:String,
                                    serial:String,
                                    receipt:String,
                                    warranty:Boolean,
                                    physical_condition:String,
                                    issues:[IssuesSchema],
                                    retail_centre:String,
                                    repair_centre:String,
                                    waybill_to_repair:String,
                                    waybill_to_retail:String,
                                    status:[StatusSchema]
                                }
                            )

let Request = mongoose.model('service_request',requestSchema)

module.exports = Request;