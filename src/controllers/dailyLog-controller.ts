import { Request, Response } from "express";
import prisma from "../config/prisma-config";

export const getCommitsCountOfProjectOfUser = async (req: Request, res: Response): Promise<void> => { 

  try {
    const userId  = req.user?.id;
    if (!userId) {
      res.status(400).json({ error: "Unauthorised" });
      return;
    }
    const {projectId } = req.query;
    if (!userId || !projectId) {
      res.status(400).json({ error: "userId and projectId are required" });
      return;
    }
    const logs = await prisma.dailyLog.findMany({
      where: {
        userId: Number(userId),
        projectId: Number(projectId),
      },
      select: {
        commitLogs: true,
      },
    });

    const totalCommitsCount = logs.reduce((sum, log) => {
      const commits = Array.isArray(log.commitLogs) ? log.commitLogs.length : 0;
      return sum + commits;
    }, 0);

    res.status(200).json({status:200, message:"Commits count fetched", totalCommitsCount });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const totalCommitsCountOfUser = async (req: Request, res: Response): Promise<void> => { 
  try {
    const userId  = req.user?.id;
    if (!userId) {
      res.status(400).json({ error: "Unauthorised" });
      return;
    }
    const logs = await prisma.dailyLog.findMany({
      where: {
        userId: Number(userId),
      },
      select: {
        commitLogs: true,
      },
    });

    const totalCommits = logs.reduce((sum, log) => {
      const commits = Array.isArray(log.commitLogs) ? log.commitLogs.length : 0;
      return sum + commits;
    }, 0);

    res.status(200).json({status:200, message:"Total Commit count of user fetched", totalCommits });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const totalCommitsCountOfToday = async (req: Request, res: Response): Promise<void> => { 

  try {
    const userId  = req.user?.id;
    if (!userId) {
      res.status(400).json({ error: "Unauthorised" });
      return;
    }
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`; 
    if (!todayStr) {
      res.status(400).json({ error: "userId and date are required" });
      return;
    }
    const log = await prisma.dailyLog.findFirst({
      where: {
        userId: Number(userId),
        date: new Date(todayStr),
      },
      select: {
        commitLogs: true,
      },
    });

    const totalCommits = log && Array.isArray(log.commitLogs) ? log.commitLogs.length : 0;

    res.status(200).json({status:200, message:"Total Commit count of today fetched", totalCommits });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const totalWorkingDaysOfUser = async (req: Request, res: Response): Promise<void> => { 
  try {
    const userId  = req.user?.id;
    if (!userId) {
      res.status(400).json({ error: "Unauthorised" });
      return;
    }
    const logs = await prisma.dailyLog.findMany({
      where: {
        userId: Number(userId),
      },
      select: {
        date: true,
      },
    });

    const uniqueDates = new Set(logs.map(log => log.date.toISOString().split('T')[0]));
    const totalWorkingDays = uniqueDates.size;

    res.status(200).json({status:200, message:"Total working days of user fetched", totalWorkingDays });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const dataForGridHeatMap = async (req: Request, res: Response): Promise<void> => { 
  try {
    const userId  = req.user?.id;
    if (!userId) {  
      res.status(400).json({ error: "Unauthorised" });
      return;
    }
    const { projectId } = req.query;
    if (!userId || !projectId) {
      res.status(400).json({ error: "userId and projectId are required" });
      return;
    }
    const logs = await prisma.dailyLog.findMany({
      where: {
        userId: Number(userId),
        projectId: Number(projectId),
      },
      select: {
        date: true,
        commitLogs: true,
      },
      orderBy: {
        date: "asc",
      },
    });

    const mapped = logs.map(log => ({
      date: log.date.toISOString().split("T")[0],
      commitCount: Array.isArray(log.commitLogs) ? log.commitLogs.length : 0,
    }));

    res.status(200).json({status:200,  commitData: mapped });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}