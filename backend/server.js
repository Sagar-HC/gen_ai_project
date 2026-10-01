require("dotenv").config();
const dns = require('node:dns');
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();





dns.setServers(['8.8.4.4', '1.0.0.1']);



app.listen(3000,()=>{
    console.log("server is running");
})
