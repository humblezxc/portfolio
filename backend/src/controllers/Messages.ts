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
