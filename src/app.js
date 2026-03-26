const express = require ('express');
const {adminAuth,userAuth} = require ('./middleware/auth');

const app = express();

app.use("/admin",adminAuth)
// app.use("/user",userAuth)

app.get("/admin/getAllData",(req,res)=>{
 res.send("All data sent")

})
app.post("/user",(req,res,next)=>{
 res.send("user loggedin")
      next()  

})
app.use("/user",userAuth,(req,res,next)=>{
 res.send("user data sent")
      next()  

})

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
    
});
