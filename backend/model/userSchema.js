const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "username": {type:String, unique:true},
    "fullName": {type:String},
    "email" : {type:String},
    "phone" : {type:String},
    "password": {type:String},
    "bookedEvents": {type:Array},
    

}, {
    collection: "userrecord"
})

module.exports = mongoose.model("userSchema", userSchema);