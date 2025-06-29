import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { emailDailyReportController, generateAISummariesForAllUsers, generateAISummaryForUser } from '../controllers/summary-controller';



const router = express.Router();

router.post('/aiSummary',generateAISummariesForAllUsers);
router.post('/user/aiSummary', jwtVerify, generateAISummaryForUser)
router.post('/summary/send-report/:projectId', jwtVerify, emailDailyReportController)

export default router;