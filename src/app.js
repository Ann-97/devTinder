const express = require ('express');
const connectDB = require ("./config/database")
const User = require("./models/user")
const app = express();

app.use(express.json())

app.post("/signup",async(req,res)=>{    
    const user = new User(req.body)
    try{
         await user.save()
    res.send("user saved successfully")
    }
    catch(err){
        res.status(400).send("error saving the user:"+ err.message)
    }  
})

//Feed api - get all users from database
app.get("/feed",async(req,res)=>{
    try{
    const users = await User.find({})
    res.send(users)
    }
    catch(err){
        res.status(400).send("something went wrong")
    }
})

app.get("/user",async(req,res)=>{
       const userEmail = req.query.emailId
       console.log("Query object:", req.query);
    try{
   const userbyId = await User.findOne({emailId:userEmail})
   if(!userbyId){

   return res.status(400).send("user not found")
   }
   else{
    return res.send(userbyId)
   }
//    if(userbyId.length===0){
//          res.status(400).send("user not found")      
//    }
//    else{
//    res.send(userbyId)
//    }
    }
    catch(err){
     res.status(400).send("something went wrong")      
    }
})

app.patch("/user",async(req,res)=>{
    const userId = req.body.userId;
    const data = req.body
    try{
        const allowedUpdates = ["photoUrl","age","gender","skills"];
        const isUpdateAllowed = Object.keys(data).every((k)=>allowedUpdates.includes(k));
        if(!isUpdateAllowed){
            throw new Error("Update not allowed")
        }
await User.findByIdAndUpdate(userId,data);
res.send("user saved successfully")
    }catch(err){
     res.status(400).send("something went wrong")      
    }
})

app.delete("/user",async(req,res)=>{
const userId = req.body.userId;
try{
const user = await User.findByIdAndDelete(userId);
res.send("User deleted successfully")
}
catch(err){
     res.status(400).send("something went wrong")      
    }
})
connectDB().then(()=>{
    console.log("connected to DB");
    app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");    
});
})
.catch((err)=>{
console.log("DB Error:", err);

})



