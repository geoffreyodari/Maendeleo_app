let mongodb_url = 'mongodb+srv://odari:hPhMqq4BzVuSrksZ@cluster0.7wdrl.mongodb.net/?retryWrites=true&w=majority';
let dbName = 'maendeleo_';
module.exports ={

    mongoDB_URI: process.env.MONGODB_URI || mongodb_url + dbName
 
 }