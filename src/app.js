const express = require ('express');
const app = express();
app.use("/user",
    (req,res,next)=>{
    console.log("1stttttt"); 
 res.send("1st res")
      next()  

},
(req,res,next)=>{
    console.log("2ndddd");   
 res.send("2nd res")
 next()
},
(req,res,next)=>{
    console.log("3rddd");   
 res.send("3rd res")
 next()
},
)

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
    
});
