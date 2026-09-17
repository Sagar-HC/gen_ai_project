const express = require("express");
const cookieParser = require("cookie-parser");

const app =express() 

app.use(express.json());
app.use(cookieParser());

//require all routes here
const authRouter = require("./routes/auth.routes.js");

//using all the routes here
//this means all the routes should have this prefix
app.use("/api/auth" , authRouter);

module.exports = app