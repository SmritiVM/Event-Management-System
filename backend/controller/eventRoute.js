const express = require("express");
const userSchema = require("../model/userSchema");
const eventRoute = express.Router();
const mongoose = require("mongoose");

eventRoute.get("/", (req,res) => {
    userSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
module.exports = eventRoute;