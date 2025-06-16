import express from 'express';
import { accessTokenUsingRefreshToken, login, logout, registerUser } from '../controllers/user-controller.ts';


const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.post('/auth/refresh-token', accessTokenUsingRefreshToken);

export default router;