const express = require("express");
const userSchema = require("../model/userSchema");
const eventSchema = require("../model/eventSchema");
const eventRoute = express.Router();
const mongoose = require("mongoose");

// --------------------------------------------------------------------------------
// User
eventRoute.get("/user-list", (req,res) => {
    userSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.route("/check-user/:uname")
.get((req, res) => {
    userSchema.findOne({username: req.params.uname}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);

    })
})

eventRoute.route("/update-user/:id")
.get((req, res) => {
    userSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req, res) => {
    userSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

// -----------------------------------------------------------------------------------------
// Events
eventRoute.get("/event-list", (req,res) => {
    eventSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.post("/create-event", (req,res) => {
    eventSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.route("/update-event/:id")
.get((req, res) => {
    eventSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req, res) => {
    eventSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = eventRoute;