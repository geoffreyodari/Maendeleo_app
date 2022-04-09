const express = require('express');
const mongoose = require('mongoose');

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())

//DB config

const MONGODB_URI= process.env.MONGODB_URI || require('./config').mongoDB_URI

// Connect to MongoDB

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true  })

// Check Connection

let db = mongoose.connection;

db.once('open', ()=>{

   console.log('Database connected successfully')

})

// Check for DB Errors

db.on('error', (error)=>{

    console.log(error);
 
 })