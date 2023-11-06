const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "email" : {type:String},
    "full name": {type:String},
    "password": {type:String},
    "phone" : {type:String},
    "username": {type:String},
    

}, {
    collection: "userrecord"
})

module.exports = mongoose.model("userSchema", userSchema);