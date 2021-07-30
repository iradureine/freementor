import sessionInfo from "../modals/sessionmodel.js";

class sessionController{
    static register= async (req,res)=>{
        const session=await sessionInfo.create(req.body);
         if (!session){
             return res.status(400).json({
                 status:400,
                 message:"failed to register"
             })
         }
         return res.status(200).json({
             status:200,
             message:"successful",
             data:session

         })

    }
    static getallsession= async (req,res)=>{
        const sessions=await sessionInfo.find();
         if (!sessions){
             return res.status(400).json({
                 status:400,
                 message:"failed to register"
             })
         }
         return res.status(200).json({
             status:200,
             message:"successful",
             data:sessions

         })
    }
    static getoneSession = async(req,res)=>{
        const session= await sessionInfo.findById(req.params.id);
        if(!session){
            return res.status(404).json({
                status:404,
                message:"failed"
            })

        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:session

        })
    }
    static deletesession = async(req,res)=>{
        const session= await sessionInfo.findByIdAndDelete(req.params.id);
        if(!session){
            return res.status(404).json({
                status:404,
                message:"failed"
            })

        }
        return res.status(200).json({
            status:200,
            message:"successfully",
            data:session

        })
}
static updatesession = async(req,res)=>{
    const session= await sessionInfo.findByIdAndUpdate(req.params.id,req.body);
    if(!session){
        return res.status(404).json({
            status:404,
            message:"failed"
        })

    }
    const update= await sessionInfo.findById(req.params.id);
    return res.status(200).json({
        status:200,
        message:"successfully",
        data:update

    })



}
    
}
export default sessionController;
    


