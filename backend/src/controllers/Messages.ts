import { Request, Response } from 'express';
import Message from '../models/MessageModel';

export const getMessages = async (req: Request, res: Response): Promise<void> => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (err) {
        console.log(err);
    }
};

export const newMessage = async (req: Request, res: Response): Promise<void> => {
    const { fullName, email, content } = req.body;
    try {
        const newMessage = await Message.create({ fullName, email, content });
        if (newMessage) {
            res.json({
                message: 'Message sent successfully',
                data: newMessage,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            data: {},
        });
    }
};
