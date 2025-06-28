import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { generateAISummariesForAllUsers, generateAISummaryForUser } from '../controllers/summary-controller';



const router = express.Router();

router.post('/aiSummary',generateAISummariesForAllUsers);
router.post('/user/aiSummary',jwtVerify, generateAISummaryForUser)

export default router;