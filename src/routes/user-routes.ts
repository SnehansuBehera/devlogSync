import express from 'express';
import { accessTokenUsingRefreshToken, login, logout, registerUser, resendOtp, verifyOtp } from '../controllers/user-controller';
import { socialAuthController } from '../controllers/socialAuth-controller';


const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.post('/auth/refresh-token', accessTokenUsingRefreshToken);
router.post('/verify', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/auth/social', socialAuthController)

export default router;