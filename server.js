const express = require('express');
const mongoose = require('mongoose');

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())