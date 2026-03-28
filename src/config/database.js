
const mongoose = require ("mongoose")

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://hellonode:test123@hellonode.imlij2q.mongodb.net/devTinder")
}

module.exports = connectDB
