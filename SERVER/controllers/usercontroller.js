import UserInfo from "../modals/usermodal";

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
                message:"failed"
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
        const update= await UserInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:update

        })



    }
}

export default UserController;