import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { getCodingDetailsByDate, getCodingTimeByDate, getFileNamesByDate, logVSCodeSession } from '../controllers/vscode-controller';



const router = express.Router();

router.post("/vscode/log", jwtVerify, logVSCodeSession);
router.get("/vscode/getCodingTime", jwtVerify, getCodingTimeByDate)
router.get("/vscode/getFiles", jwtVerify, getFileNamesByDate)
router.get("/vscode/getCodingDetails", jwtVerify, getCodingDetailsByDate)

export default router;