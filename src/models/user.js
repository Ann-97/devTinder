const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true
    },
    lastName :
     {
        type:String
    },
    emailId : {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password : {
        type:String,
        required:true 
      },
    gender : {
        type:String
    },
    age : {
        type:Number,
      validate(value){
        if(!["male","female","others"].includes(value)){
            throw new error("Gender not valid")
        }
      }
    },
     photoUrl : {
        type:String,
        default:"https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_incoming&w=740&q=80"
      },
       about : {
        type:String,
        default: "This is a default about of the user"
      },
      

},{timestamps:true})

const User = mongoose.model("user",userSchema)
module.exports = User