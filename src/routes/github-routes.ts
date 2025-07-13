import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { addGithubLinks, getCommitsByDate, getProjectCommitsForDate, getUnexportedLogsByProjectAndUser, handleGitHubWebhook } from '../controllers/github-controller';


const router = express.Router();

router.post("/addGithub", jwtVerify, addGithubLinks)
// router.get("/auth/github/callback", jwtVerify, updateGithubTokens);
router.post('/github/github/webhook', handleGitHubWebhook);
router.get("/github/getCommitsByDate", jwtVerify, getCommitsByDate);
router.get('/github/daily-logs/unexported', jwtVerify, getUnexportedLogsByProjectAndUser);
router.get('/github/commits-project', jwtVerify, getProjectCommitsForDate);

export default router;