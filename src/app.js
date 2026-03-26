const express = require('express');
const app = express();
app.get("/user/:userId", (req, res) => {
    console.log(req.params,"paramsss");   
 res.send({firstName:"Ann",lastName:"John"});
});

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
    
});
