const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const interviewRouter = require("./routes/interview.routes.js")
const app =express() 

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

//require all routes here
const authRouter = require("./routes/auth.routes.js");

//using all the routes here
//this means all the routes should have this prefix
app.use("/api/auth" , authRouter);
app.use("/api/interview" , interviewRouter);

module.exports = app