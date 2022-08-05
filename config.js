let mongodb_url = 'mongodb://localhost/';
let dbName = 'darkroom';
module.exports ={

    mongoDB_URI: process.env.MONGODB_URI || mongodb_url + dbName
 
 }