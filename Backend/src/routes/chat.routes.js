import express from 'express';
import {sendMessageController, getChatsController, getMessagesController, deleteChatController} from '../controllers/chat.controller.js';
import { authUserMiddleware } from '../middlewares/auth.middleware.js';

const chatRouter = express.Router();

chatRouter.post("/message", authUserMiddleware, sendMessageController);

chatRouter.get("/", authUserMiddleware, getChatsController);

chatRouter.get("/:chatId/messages", authUserMiddleware, getMessagesController);

chatRouter.delete("/delete/:chatId", authUserMiddleware, deleteChatController);


export default chatRouter;