import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { acceptInvite, sendInvite } from '../controllers/invite-controller';



const router = express.Router();

router.post('/invite', jwtVerify, sendInvite);
router.get('/accept-invite', jwtVerify, acceptInvite);


export default router;