const express = require('express');
const cors = require('cors');
// const {retryConnection}=require('./config/testConn.js')
// import express from 'express';
const dbConfig=require('./config/dbConnection');
const studentRoutes = require('./routes/studentRoutes');  // Correct pat

require('dotenv').config();
const app = express()
app.use(express.json());

const corsOptions = {
  origin: '*',  // Allow all origins (this could be restricted for production environments)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow these headers
};

// Enable CORS globally for all routes
app.use(cors(corsOptions));  

// app.options('*', cors())
const port = process.env.PORT||8000

// dbConfig.authenticate()
//   .then(() => {
//     console.log('Database connected successfully!');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// ROUTES
app.use('/api', studentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World! AJU')
})

app.get('/dbconn', (req, res) => {
  dbConfig.testConnection();
})

app.listen(port, () => {
  // retryConnection();
  // dbConfig.testConnection();
  console.log(`Example app listening on port ${port}`)
})
