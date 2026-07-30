import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import { sendEmail } from "../services/mail.service.js";

export async function registerController (req, res) {
    const {username, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })


    if(isUserAlreadyExists){
        return res.status().json({
            success: false,
            message: "User alreay exists with email or username",
            err: "User alreay exists"
        })
    }


    const user = await userModel.create({username, email, password})

    await sendEmail({
        to: email,
        subject: "Welcome to Perplexity",
        // text: `Hi ${username}, \n\n Thank you for registering at Perplexity. We're excited to have you on board! \n\nBest regards, \nThe Perplexity Team`,
        html: `<p>Hi ${username},</p><p>Thank you for registering at <strong>Perplexity</strong>, We're excited to have you on board!</p><p>Best regards, <br>The Perplexity Team.</p>`
    })

    res.status(201).json({
        message: "User registered successfully.",
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email:user.email
        }
    })
}




export default {
    registerController
}