import express, { Router } from 'express';
import { getMessages } from '../controllers/Messages';

const router: Router = express.Router();

router.get('/api/messages', getMessages);

export default router;
