import express from 'express';
import { registerValidator } from '../validators/auth.validator.js';
import authController from '../controllers/auth.controller.js';


const authRouter = express.Router();


authRouter.post("/register", registerValidator, authController.registerController );




export default authRouter;