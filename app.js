
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const favicon = require('serve-favicon')
const path = require('path')


const retailRoutes = require('./routes/retailRoutes') //new code

// Initializing express
const app = express()

// add favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Body parser middleware
app.use(express.json())

//enabling cors
app.use(cors())

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

// Use retail Routes
app.use('/retail/requests/', retailRoutes)  

// Update Routes
app.use('/retail', retailRoutes)

// Update Routes
app.use('/', retailRoutes)


 // Define the PORT
const PORT = process.env.PORT || 5001

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
 })
