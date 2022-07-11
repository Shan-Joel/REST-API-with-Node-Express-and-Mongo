const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

// Middlewares - specific route ekak hit karaddi run wenna one specific function ekak thamai simply middleware kiyanne
// app.use('/posts', () => {
//    console.log('Run when hit posts route');
// });

// Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(process.env.DB_Connection, () => {
   console.log('DB Connected');
});

// Listen port
app.listen(3000);

// joel  Shand12345
// mongodb+srv://joel:Shand12345@deved.bwo4huq.mongodb.net/?devDBretryWrites=true&w=majority
