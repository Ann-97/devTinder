const express = require ('express');

const app = express();

app.get("/getUserData",(req,res)=>{
    throw new Error("sasdvbf")
    res.send("userdata send") 
})

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong")
    }
})


app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
    
});
