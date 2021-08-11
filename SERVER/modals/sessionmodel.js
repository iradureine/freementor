import mongoose from "mongoose";

const sessionSchema= new mongoose.Schema({
    title:String,
    description:String,
    user:String, 
    mentor:String,
    timeToStart:Date,
    timeToEnd:Date,
    status:{
        type:String,
        enum:["pending","decline","approved"],
        default:"pending"
    }
    })
const  sessionInfo= mongoose.model("session",sessionSchema);

export default sessionInfo;