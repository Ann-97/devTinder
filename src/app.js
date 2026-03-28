const express = require ('express');
const connectDB = require ("./config/database")
const User = require("./models/user")
const app = express();

app.post("/signup",async(req,res)=>{
    const userObj = {
        firstName:"Kim",
        lastName:"Taehyung",
        emailId:"tae@gmail.com",
        password:"Tae@1234"
    }
    const user = new User(userObj)
    try{
         await user.save()
    res.send("user saved successfully")
    }
    catch{
        res.status(400).send("error saving the user:"+ err.message)
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



