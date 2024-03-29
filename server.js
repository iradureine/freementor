import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRouter from  "./SERVER/routes/userroutes.js";
import sessionRouter from "./SERVER/routes/sessionroute.js";
import bodyParser from "body-parser";

dotenv.config({path:'./.env'});
const app=express();
app.use(cors());
app.use(bodyParser.json());

app.use("/freementor/v1/user",userRouter);
app.use("/freementor/v1/session",sessionRouter);

app.use('/',(req,res)=>{
    res.status(404).send({
    status:404,
    message:"this routes does'nt exist"
    })
})
const databaseUrl= process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("database is connected sucessfully"));

const port=process.env.PORT;
app.listen(port,()=>{   
console.log(`server is running on port ${port}`);
});

export default app;

