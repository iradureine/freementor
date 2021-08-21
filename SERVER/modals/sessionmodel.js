import mongoose from "mongoose";

const sessionSchema= new mongoose.Schema({
    title:String,
    description:String,
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }, 
    mentor:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }, 
    timeToStart:Date,
    timeToEnd:Date,
    status:{
        type:String,
        enum:["pending","decline","approved"],
        default:"pending"
    }
    });

    sessionSchema.pre(/^find/, function(next){
        this.populate({
            path:"user",
            select:" firstName lastName email phone gender"
        }).populate({
            path:"mentor",
            select:" firstName lastName email phone gender career"
    
        });
    
        next();
    })
const  sessionInfo= mongoose.model("session",sessionSchema);

export default sessionInfo;