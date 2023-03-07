import express, { Router } from 'express';
import {getMessages, newMessage} from '../controllers/Messages';

const router: Router = express.Router();

router.get('/api/messages', getMessages);
router.post('/api/messages', newMessage);

export default router;
