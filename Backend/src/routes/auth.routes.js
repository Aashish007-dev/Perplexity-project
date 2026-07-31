import express from 'express';
import { loginValidator, registerValidator } from '../validators/auth.validator.js';
import authController from '../controllers/auth.controller.js';
import { authUserMiddleware } from '../middlewares/auth.middleware.js';


const authRouter = express.Router();


authRouter.post("/register", registerValidator, authController.registerController );

authRouter.get("/verify-email", authController.verifyEmailController);

authRouter.post("/login", loginValidator, authController.loginController);

authRouter.get("/get-me", authUserMiddleware ,authController.getMeController)


export default authRouter;