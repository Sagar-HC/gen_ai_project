require("dotenv").config();
const dns = require('node:dns');
const app = require("./src/app");
const connectToDb = require("./src/config/database");
const {resume , selfDescription , jobDescription} = require("./src/services/temp")
const generateInterviewReport = require("./src/services/ai.services")
connectToDb();

generateInterviewReport({resume , selfDescription, jobDescription})





dns.setServers(['8.8.4.4', '1.0.0.1']);



app.listen(3000,()=>{
    console.log("server is running");
})
