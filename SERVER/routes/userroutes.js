import express from "express";
import Validator from "../middleware/validator.js"
import UserController from "../controllers/usercontroller.js";


 const userRouter= express.Router();

userRouter.post("/signup",
Validator.newAccountRules(),
Validator.validateInput,
UserController.signupUser);

userRouter.get("/all",UserController.getAllUsers);
userRouter.get("/:id",UserController.getoneUser);
userRouter.delete("/:id",UserController.deleteUser);
userRouter.patch("/:id",UserController.updateUser);

 

 export default userRouter;
 