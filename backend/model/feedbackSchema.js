const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
    "name": {type:String},
    "email" : {type:String},
    "message" : {type:String}
    

}, {
    collection: "feedback"
})

module.exports = mongoose.model("feedbackSchema", feedbackSchema);