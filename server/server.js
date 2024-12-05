const express = require('express');
const path = require('path');
const connectDB = require('./config/database');  
const route = require('./route/Routes');  

const app = express();

// Middleware
// Middleware to parse JSON request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', route);  

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
