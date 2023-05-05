import {Request, Response} from 'express';
import Message from '../models/MessageModel';

export const newMessage = async (req: Request, res: Response): Promise<void> => {
    const {fullName, email, content} = req.body;
    try {
        const newMessage = await Message.create({fullName, email, content});
        if (newMessage) {
            console.log(newMessage)
            res.json({
                message: 'Message sent successfully',
                data: newMessage,
            });
        }
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errorMessages = error.errors.map((err: any) => err.message);
            res.status(400).json({
                message: 'Validation error',
                errors: errorMessages,
            });
        } else {
            res.status(500).json({
                message: 'Server error',
            });
            console.log(error)
        }
    }
};
