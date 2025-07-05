import express from 'express';
import { accessTokenUsingRefreshToken, getUserFromAccessToken, login, logout, registerUser, resendOtp, updateUserProfile, verifyOtp } from '../controllers/user-controller';
import { socialAuthController } from '../controllers/socialAuth-controller';
import { jwtVerify } from '../middleware/user-middleware';


const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.post('/auth/refresh-token', accessTokenUsingRefreshToken);
router.post('/verify', verifyOtp);
router.post('/resend-otp', resendOtp);
router.post('/auth/social', socialAuthController);
router.put('/auth/update-user', jwtVerify, updateUserProfile);
router.get('/auth/getUser', jwtVerify, getUserFromAccessToken)

export default router;