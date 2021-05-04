import express from 'express';
const router = express.Router();

// Controllers
import { registerUser, authUser } from '../controllers/userControllers.js';

router.route('/').post(registerUser);
router.route('/login').post(authUser);

export default router;
