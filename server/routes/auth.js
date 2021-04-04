import express from 'express';
const router = express.Router();

// Controllers
import { showMessage } from '../controllers/auth.js';

router.get('/:message', showMessage);

export default router;
