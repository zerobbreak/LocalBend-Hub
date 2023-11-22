const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cryto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8080
const cors = require("cors");

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://zer:unathi@cluster0.18zdpwh.mongodb.net/", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    console.log("Connect to Mongodb");
}).catch((err) => {
    console.log("error connecting to Mongodb", err)
});

app.listen(port, () =>{
    console.log("Server is runninig in port 8080")
})