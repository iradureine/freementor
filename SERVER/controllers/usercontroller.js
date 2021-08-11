import UserInfo from "../modals/usermodal.js";
import  TokenAuth from "../helpers/tokenAuth.js"

class UserController{
    static signupUser= async (req,res)=>{
        const user=await UserInfo.create(req.body);
         if (!user){
             return res.status(400).json({
                 status:400,
                 message:"failed to register"
             })
         }
         return res.status(200).json({
             status:200,
             message:"successful",
             data:user

         })

    }
    static getAllUsers= async(req,res)=>{
        const users= await UserInfo.find();
        if(!users){
            return res.status(400).json({
                status:400,
                message:"failed"
            })
        }
            return res.status(200).json({
                status:200,
                message:"successful",
                data:users

            })
       
    }

    static getoneUser = async(req,res)=>{
        const user= await UserInfo.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                status:404,
                message:"failed"
            })

        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:user

        })



    }

    static deleteUser = async(req,res)=>{
        const user= await UserInfo.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                status:404,
                message:"failed to delete"
            })

        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:user

        })



    }

    static updateUser = async(req,res)=>{
        const user= await UserInfo.findByIdAndUpdate(req.params.id,req.body);
        if(!user){
            return res.status(404).json({
                status:404,
                message:"failed"
            })

        }
        //const update= await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:user

        })
    }
    static signinUser=async (req,res)=>{

        const {email,password}=req.body;
        const user=await UserInfo.findOne({email:email, password:password});
        if(!user){
            return res.status(404).json({
                status:404,
                message:"user does not exist"
            })
        }

        const token =TokenAuth.tokenGenerator({
            id:user._id,
            email:user.email,
            role:user.role
        })
        return res.status(200).json({
            status:200,
            message:" login sucessfully",
            token:token,
            data:user

        });
    }
    static getAllMentors = async (req, res) => {
        const users = await UserInfo.find({role:"mentor"});

        if (!users) {
            return res.status(404).json({
             status: 404,
                message: "failed to get all users"
            })
        }

        return res.status(200).json({
            status: 200,
            message: "success",
            data: users
        })
    }

    static updateOneUserRole=async (req,res)=>{
        const data= await UserInfo.findById(req.params.id);
        let role;
        if (data.role=="user"){
        role="mentor";
    }
        else(role="user");

        const user= await UserInfo.findByIdAndUpdate(req.params.id, {role:role});
        if(!user){
            return res.status(404).json({
                status:404,
                message:"user does not exist"
            })
        }
        const updateUser = await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status: 200,
            message: "Success",
            data:updateUser
        })

        }
    
    }
        

    



export default UserController;