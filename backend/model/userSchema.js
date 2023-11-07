const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "username": {type:String, unique:true},
    "full name": {type:String},
    "email" : {type:String},
    "phone" : {type:String},
    "password": {type:String},
    

}, {
    collection: "userrecord"
})

module.exports = mongoose.model("userSchema", userSchema);