const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FullName:{
        type: String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:false
    },
    isVerified:{
        type:Boolean,
        default:false
    }
});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;