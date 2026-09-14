const express = require("express");

const app =express() 

app.use(express.json())

//require all routes here
const authRouter = require("./routes/auth.routes.js");

//using all the routes here
//this means all the routes should have this prefix
app.use("/api/auth" , authRouter);

module.exports = app