import express from "express";
import SessionController from "../controllers/sessioncontroller.js";
 
const sessionRouter=express.Router();

 sessionRouter.post("/register", SessionController.register);
 sessionRouter.get("/all", SessionController.getallsession);
 sessionRouter.get("/:id", SessionController.getoneSession);
 sessionRouter.delete("/:id", SessionController.deletesession);
 sessionRouter.patch("/:id", SessionController.updatesession);





 export default sessionRouter;