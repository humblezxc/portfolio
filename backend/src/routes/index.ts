import express, {Router} from 'express';
import {newMessage} from '../controllers/Messages';

const router: Router = express.Router();

router.post('/api/messages', newMessage);

export default router;
