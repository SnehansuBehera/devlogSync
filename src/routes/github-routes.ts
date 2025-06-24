import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { addGithubLinks, getCommitsByDate, handleGitHubWebhook, updateGithubTokens } from '../controllers/github-controller';


const router = express.Router();

router.post("/addGithub", jwtVerify, addGithubLinks)
router.get("/auth/github/callback", jwtVerify, updateGithubTokens);
router.post('/github/github/webhook', handleGitHubWebhook);
router.get("/github/getCommitsByDate", jwtVerify, getCommitsByDate)

export default router;