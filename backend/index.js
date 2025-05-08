const express = require("express");
const mongoose = require("mongoose");
const eventRoute = require("./controller/eventRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect("<DATABASE NAME>");
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/eventRoute', eventRoute);
app.listen(4000, () => {
    console.log("Server started at 4000");
})
