
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let statusSchema = new Schema   ({
    timestamp: {type:Date,default: Date()},
    state: String,
    comments: String
    
})

let issuesSchema = new Schema({

    display:{	
                cracked:Boolean,
                notWorking:Boolean,
                noTouch:Boolean
            },
    power:{
                notPoweringUp:Boolean,
                notCharging:Boolean,
                shortBatteryLife:Boolean
            },
    speaker:{
                noSound:Boolean,
                distortedSound:Boolean,
                notRinging:Boolean
    },
    network:{
                noMobileNetwork:Boolean,
                noWifiNetwork:Boolean,
                droppedCalls:Boolean,
                unableToCall:Boolean
    },
    physicalDamage:{	
            faultyKeys:Boolean,
            crackedBody:Boolean
    },
    software:{
            slow:Boolean,
            crashing:Boolean,
            hanging:Boolean
    }	

})


let accessoriesSchema = new Schema   ({
    battery:Boolean,
    charger:Boolean
})

let retailSchema = new Schema({
    Timestamp: {type:Date,default: Date()},
    Name: String,
    phone: String,
    email: String,
    national_id: String,
    altPhone:String,
    brand: String,
    model: String,
    imei: String,
    serial: String,
    receipt: String,
    warranty: Boolean,
    lipaMdogoMdogo:Boolean,
    accessories:accessoriesSchema,
    physical_condition: String,
    Issues:issuesSchema,
    standByUnit:Boolean,
    standByUnitBrand:String,
    standByUnitModel:String,
    standByUnitSerial:String,
    retail_centre: String,
    repair_centre: String,
    waybill_to_repair: String,
    waybill_to_retail: String,
    status:[statusSchema]    
        
 })

 let Request = mongoose.model('service_request', retailSchema)

module.exports = Request;

