require('dotenv').config();

const connectDB = require('./App/dbConnection/db');
const express = require('express');
const cors = require('cors');

const Mailroutes = require('./App/Routes/UserRoutes/MailRoutes');

let app = express();
app.use(cors());

app.use(express.json());
connectDB();

app.use('/web/api/mail',Mailroutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is Running on Port ${PORT}`)
})