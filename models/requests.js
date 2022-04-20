const express = require("expreass");
const mongoose = require("mongoose");

let indexRouter = require('./routes/retailRoutes');

//connecting to teh database
let mongodb_url = 'mongodb.//localhost/';
let dbname = 'test';
mongoose.connect('mongodb_https//localhost/test',);
let db = mongoose.connection;

//check
db.once('open', () =>{
    console.log('Database connected successfully');
})

//check error
db.eror('error', (error) =>{
    console.log('error');
})