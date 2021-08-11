import {check, validationResult} from "express-validator";



class Validator{
   

    static validateInput= (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage=errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status:400,
                message:errorMessage
            })
        }
        return next();
    }
    static newAccountRules(){
        return[
          check("email","please your email is invalid").isEmail(),
          check("firstName", "please your firstname have special character").isAlpha(),
          check("lastName","please your firstname have special character").isAlpha(),
          check("gender","gender is invalid").isIn(['male','female']),
          check("phone","your phone is invalid ").isMobilePhone(),
          check ("age","age should be integer").isInt(),
          check("password","password must be strong").isStrongPassword()

        ];

    }
    static checkId(){
        return [check ("id","id should be mongoId").isMongoId(),
    ]
    }

    

}
export default Validator;