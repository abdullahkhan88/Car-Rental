require('dotenv').config();

const connectDB = require('./App/dbConnection/db');
const express = require('express');
const cors = require('cors');

let app = express();
app.use(cors());

app.use(express.json());
connectDB();


app.listen(process.env.MONGO_URL, () =>{
    console.log(`Server is Running on Port ${process.env.PORT}`)
})