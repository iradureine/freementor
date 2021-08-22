import express from "express";
import Validator from "../middleware/validator.js"
import UserController from "../controllers/usercontroller.js";
import Datachecker from "../middleware/datachecker.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyAccess from "../middleware/verifyAccess.js";



const userRouter= express.Router();

userRouter.post("/signup",
Validator.newAccountRules(),
Validator.validateInput,
Datachecker.validateEmailDuplication,
Datachecker.checkAge,

UserController.signupUser);


userRouter.post("/signin",UserController.signinUser);
userRouter.get("/all/mentor",verifyToken,verifyAccess("user"),UserController.getAllMentors);
userRouter.get("/all",verifyToken,verifyAccess("mentor"),UserController.getAllUsers);
userRouter.get("/:id",Validator.checkId(),Validator.validateInput,UserController.getoneUser);
userRouter.get("/:id/mentor",verifyToken,verifyAccess("user"),Validator.checkId(),Validator.validateInput,UserController.getspecificMentor);
userRouter.delete("/:id",verifyToken,verifyAccess("admin"),Validator.checkId(),Validator.validateInput,UserController.deleteUser);
userRouter.patch("/:id",verifyToken,verifyAccess("admin"),Validator.checkId(),Validator.validateInput,UserController.updateUser);
userRouter.patch("/:id/role",verifyToken,verifyAccess("admin"),UserController.updateOneUserRole);

 

 export default userRouter;
 