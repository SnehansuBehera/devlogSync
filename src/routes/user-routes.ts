import express from 'express';
import { accessTokenUsingRefreshToken, changePassword, forgotPassword, getUserFromAccessToken, login, logout, registerUser, resendOtp, resetPassword, setPassword, updateUserProfile, verifyOtp, verifyPasswordOtp } from '../controllers/user-controller';
import { githubAuthController, socialAuthController } from '../controllers/socialAuth-controller';
import { jwtVerify } from '../middleware/user-middleware';


const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', login);
router.post('/auth/logout', logout);
router.post('/auth/refresh-token', accessTokenUsingRefreshToken);
router.post('/verify', verifyOtp);
router.post('/verify/passwordOtp', verifyPasswordOtp);
router.post('/resend-otp', resendOtp);
router.post('/auth/social', socialAuthController);
router.post('/auth/social/github',jwtVerify, githubAuthController);
router.put('/auth/update-user', jwtVerify, updateUserProfile);
router.get('/auth/getUser', jwtVerify, getUserFromAccessToken)
router.post('/auth/forgot-password', forgotPassword);
router.put('/auth/reset-password', resetPassword);
router.put('/auth/change-password', jwtVerify, changePassword);
router.put('/auth/set-password', jwtVerify, setPassword)
export default router;