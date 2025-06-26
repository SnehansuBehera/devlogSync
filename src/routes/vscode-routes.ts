import express from 'express';
import { jwtVerify } from '../middleware/user-middleware';
import { getAllDetailsOfUser, getAllVSCodeLogs, getCodingDetailsByDate, getCodingTimeByDate, getFileNamesByDate, getTotalCodingTimeOfUser, logVSCodeSession } from '../controllers/vscode-controller';



const router = express.Router();

router.post("/vscode/log", jwtVerify, logVSCodeSession);
router.get("/vscode/getCodingTime", jwtVerify, getCodingTimeByDate);
router.get("/vscode/getFiles", jwtVerify, getFileNamesByDate);
router.get("/vscode/getCodingDetails", jwtVerify, getCodingDetailsByDate);
router.get("/vscode/getAllDetailsOfUser", jwtVerify, getAllDetailsOfUser);
router.get("/vscode/getTotalCodingTime", jwtVerify, getTotalCodingTimeOfUser);
router.get("/vscode/all", jwtVerify, getAllVSCodeLogs)
export default router;