const { Int32, Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    "name": {type:String, unique:true},
    "date": {type:Date},
    "startTime": {type: String},
    "endTime": {type:String},
    "place": {type:String},
    "club": {type:String},
    "description": {type:String},
    "slots": {type: Number},
    "registeredUsers" : {type:Array},
    

}, {
    collection: "events-record"
})

module.exports = mongoose.model("eventSchema", eventSchema);