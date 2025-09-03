const express = require("express");
/* const  sendEmail  = require("../../utils/sendMail"); */
const {sendOtp,VerifyOtp,Registration} = require( '../../Controllers/WebControllers/LoginControllers');

const Mailroutes = express.Router();

Mailroutes.post("/send", sendOtp); // http://localhost:8000/web/api/mail/send
Mailroutes.post("/verify", VerifyOtp); // http://localhost:8000/web/api/mail/verify
Mailroutes.post("/registration",Registration); // http://localhost:8000/web/api/mail/registration

module.exports = Mailroutes;