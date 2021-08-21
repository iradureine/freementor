import express from "express";
import SessionController from "../controllers/sessioncontroller.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyAccess from "../middleware/verifyAccess.js";
 
const sessionRouter=express.Router();

 sessionRouter.post("/register",SessionController.register);
 sessionRouter.get("/all", SessionController.getallsession);
 sessionRouter.get("/:id", SessionController.getoneSession);
 sessionRouter.get("/:id/session", SessionController.getallsessionofauser);
 sessionRouter.delete("/:id", SessionController.deletesession);
 sessionRouter.patch("/:id", SessionController.updatesession);
sessionRouter.patch("/:id/status",verifyToken,verifyAccess("mentor"),SessionController.updateSessionStatusAppr);
sessionRouter.patch("/:id/statusdec",verifyToken,verifyAccess("mentor"),SessionController.updateSessionStatusDecl);
//verifyToken,verifyAccess("user"),


 export default sessionRouter;