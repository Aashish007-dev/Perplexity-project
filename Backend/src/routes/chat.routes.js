import express from 'express';
import {sendMessageController} from '../controllers/chat.controller.js';
import { authUserMiddleware } from '../middlewares/auth.middleware.js';

const chatRouter = express.Router();

chatRouter.post("/message", authUserMiddleware, sendMessageController);


export default chatRouter;