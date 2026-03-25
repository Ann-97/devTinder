const express = require('express');
// initialize the app and make it listen to a port.
const app = express();

app.use((req,res)=>{
    res.send("helloooo ............")
})
app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
    
});
// we’ve created our first server 