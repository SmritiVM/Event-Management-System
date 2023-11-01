const express = require("express");
const eventRoute = express.Router();

eventRoute.get("/", (req,res) => {
    console.log("GET");
})
module.exports = eventRoute;