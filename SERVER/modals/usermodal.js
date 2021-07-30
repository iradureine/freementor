import  mongoose from "mongoose";

const UserSchema=new  mongoose.Schema({
    firstName:{type:String,
              required:[true,"firstname is required"]},

    lastName:String,
    email: {type:String,
        
            Unique:true},
    phone:String,

    password:{type:String,
        default:["123456"]},
    gender:{type:String,
        enum:["female","male"]},
        
    age:Number,

     role:{type:String,
    enum:["admin","mentor","user"],
    default:"user"}

})

const UserInfo= mongoose.model('User',UserSchema);

export default UserInfo;
