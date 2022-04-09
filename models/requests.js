const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
                                    Issues:Array,
                                    retail_centre:String,
                                    repair_centre:String,
                                    waybill_to_repair:String,
                                    waybill_to_retail:String,
                                    status:Array
                                }
                            )

let Request = mongoose.model('Request',requestSchema)

module.exports = Request;