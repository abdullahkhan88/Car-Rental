const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    otp:{
        type:String,
        required:false
    },
    otpCreatedAt:{
        type:Date,
        default:Date.now,
        expires:300
    },
    isVerified:{
        type:Boolean,
        default:false
    }
});
const otpModel = mongoose.model("otp",otpSchema);
module.exports = otpModel;