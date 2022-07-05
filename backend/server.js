const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.listen(port,()=>console.log(`Server started on port : ${port}`));
connectDB();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/api/books',require('./routes/bookRoutes'));
