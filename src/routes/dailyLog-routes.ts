import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { dataForGridHeatMap, getCommitsCountOfProjectOfUser, totalCommitsCountOfToday, totalCommitsCountOfUser, totalWorkingDaysOfUser } from '../controllers/dailyLog-controller';



const router = express.Router();

router.get("/user/project/totalCommits", jwtVerify, getCommitsCountOfProjectOfUser)
router.get('/user/totalCommits', jwtVerify, totalCommitsCountOfUser);
router.get("/user/day/totalCommits", jwtVerify, totalCommitsCountOfToday);
router.get('/user/workingDays', jwtVerify, totalWorkingDaysOfUser);
router.get('/user/project/contribution', jwtVerify, dataForGridHeatMap);

export default router;