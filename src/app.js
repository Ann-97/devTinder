const express = require('express');
// initialize the app and make it listen to a port.
const app = express();
// This will only handle GET requests to /user
app.get("/user", (req, res) => {
 res.send({firstName:"Ann",lastName:"John"});
});
app.post("/user", (req, res) => {
 res.send("data saved successfully")
});
// This will handle all HTTP method requests to /test
app.use("/hello", (req, res) => {
 res.send("hello hello hello!!");
});
// app.use("/",(req,res)=>{
//     res.send("helloooo ............")
// })
app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
    
});
// we’ve created our first server 