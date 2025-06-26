
import { Request, Response } from 'express';
import prisma from '../config/prisma-config';

export const logVSCodeSession = async (req: Request, res: Response):Promise<void> => {
    try {
      const userId = req.user?.id; 
        if (!userId) {
            res.status(400).json({status: 400, message: 'User ID is required' });
            return;
        }
    const { activeFileName, codingTime, date} = req.body;
    if (!activeFileName || !codingTime || !date) {
      res.status(400).json({status: 400, message: 'activeFileName, codingTime, and date are required' });
      return;
    }
    const logDate = new Date(date);
    logDate.setHours(0, 0, 0, 0);

    let details = await prisma.codingDetails.findFirst({
      where: {
        userId,
        date: logDate,
      },
    });

    if (!details) {
      details = await prisma.codingDetails.create({
        data: {
          userId,
          date: logDate,
        },
      });
    }

    let existingLog = await prisma.vSCodeLog.findFirst({
      where: {
        activeFileName,
        date: logDate,
        codingDetails: {
          some: {
            id: details.id,
          },
        },
      },
    });

    let newLog = null;
    if (existingLog) {
      await prisma.vSCodeLog.update({
        where: { id: existingLog.id },
        data: {
          codingTime: { increment: codingTime },
        },
      });
    } else {
      newLog = await prisma.vSCodeLog.create({
        data: {
          activeFileName,
          codingTime,
          date: logDate,
          codingDetails: {
            connect: { id: details.id },
          },
        },
      });
    }

    res.status(200).json({status: 200, message: 'VS Code log updated successfully', log: newLog || existingLog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 500, message: 'Internal Server error' });
  }
};

export const getCodingTimeByDate = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = req.user?.id;
    const { dateQuery } = req.body;

    if (isNaN(userId)) {
      res.status(400).json({status:400, error: 'Unauthorized' });
      return;
    }

    const whereCondition: any = {
      userId,
    };

    if (dateQuery) {
      const date = new Date(dateQuery);
      if (isNaN(date.getTime())) {
        res.status(400).json({status:400, error: 'Invalid date format. Use YYYY-MM-DD' });
        return;
      }
      whereCondition.date = date;
    }

    const codingDetails = await prisma.codingDetails.findMany({
      where: whereCondition,
      include: {
        logs: true,
      },
    });

    if (codingDetails.length === 0) {
      res.status(404).json({ message: 'No coding logs found for the given user/date.' });
      return;
    }

    // Calculate total time grouped by date
    const result: Record<string, number> = {};

    codingDetails.forEach((detail) => {
      const dateStr = detail.date.toISOString().split('T')[0];
      const totalTime = detail.logs.reduce((acc, log) => acc + log.codingTime, 0);

      if (!result[dateStr]) {
        result[dateStr] = 0;
      }
      result[dateStr] += totalTime;
    });

    res.status(200).json({status: 200, message: "Coding time fetched successfully", data: result });
  } catch (error) {
    console.error('Error fetching coding time:', error);
    res.status(500).json({status: 500, error: 'Internal server error' });
  }
};
export const getFileNamesByDate = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = req.user?.id;
    const { dateQuery } = req.body;

    if (isNaN(userId)) {
      res.status(400).json({status:400, error: 'Unauthorized' });
      return;
    }

    const whereCondition: any = {
      userId,
    };

    if (dateQuery) {
      const date = new Date(dateQuery);
      if (isNaN(date.getTime())) {
        res.status(400).json({status:400, error: 'Invalid date format. Use YYYY-MM-DD' });
        return;
      }
      whereCondition.date = date;
    }

    const codingDetails = await prisma.codingDetails.findMany({
      where: whereCondition,
      include: {
        logs: true,
      },
    });

    if (codingDetails.length === 0) {
      res.status(404).json({ message: 'No coding logs found for the given user/date.' });
      return;
    }

    // Calculate total time grouped by date
    const result: Array<{fileName: string}> = [];

    codingDetails.forEach((detail) => {
      detail.logs.forEach((log) => {
        result.push({ fileName: log.activeFileName });
      });
    });

    res.status(200).json({status: 200, message: "File names fetched successfully", data: result });
  } catch (error) {
    console.error('Error fetching file names:', error);
    res.status(500).json({status: 500, error: 'Internal server error' });
  }
};
export const getCodingDetailsByDate = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = req.user?.id;
    const { dateQuery } = req.body;

    if (isNaN(userId)) {
      res.status(400).json({status:400, error: 'Unauthorized' });
      return;
    }

    const whereCondition: any = {
      userId,
    };

    if (dateQuery) {
      const date = new Date(dateQuery);
      if (isNaN(date.getTime())) {
        res.status(400).json({status:400, error: 'Invalid date format. Use YYYY-MM-DD' });
        return;
      }
      whereCondition.date = date;
    }

    const codingDetails = await prisma.codingDetails.findMany({
      where: whereCondition,
      include: {
        logs: true,
      },
    });

    if (codingDetails.length === 0) {
      res.status(404).json({ message: 'No coding logs found for the given user/date.' });
      return;
    }

    res.status(200).json({status: 200, message: "File names fetched successfully", data: codingDetails });
  } catch (error) {
    console.error('Error fetching file names:', error);
    res.status(500).json({status: 500, error: 'Internal server error' });
  }
};

export const getAllDetailsOfUser = async(req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (isNaN(userId)) {
      res.status(400).json({status:400, error: 'Unauthorized' });
      return;
    }

    const codingDetails = await prisma.codingDetails.findMany({
      where: { userId },
      include: {
        logs: true,
      },
    });

    if (codingDetails.length === 0) {
      res.status(404).json({ message: 'No coding logs found for the given user.' });
      return;
    }

    res.status(200).json({status: 200, message: "Coding details fetched successfully", data: codingDetails });
  } catch (error) {
    console.error('Error fetching coding details:', error);
    res.status(500).json({status: 500, error: 'Internal server error' });
  }
}

export const getTotalCodingTimeOfUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (isNaN(userId)) {
      res.status(400).json({status:400, error: 'Unauthorized' });
      return;
    }

    const codingDetails = await prisma.codingDetails.findMany({
      where: { userId },
      include: {
        logs: true,
      },
    });

    if (codingDetails.length === 0) {
      res.status(404).json({ message: 'No coding logs found for the given user.' });
      return;
    }

    const totalCodingTime = codingDetails.reduce((total, detail) => {
      return total + detail.logs.reduce((sum, log) => sum + log.codingTime, 0);
    }, 0);

    res.status(200).json({status: 200, message: "Total coding time fetched successfully", data: totalCodingTime });
  } catch (error) {
    console.error('Error fetching total coding time:', error);
    res.status(500).json({status: 500, error: 'Internal server error' });
  }
}

export const getAllVSCodeLogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (isNaN(userId)) {
      res.status(400).json({status:400, error: 'Unauthorized' });
      return;
    }

    const logss = await prisma.codingDetails.findMany({
      include: {
        logs: true
      },
    });

    if (logss.length === 0) {
      res.status(404).json({ message: 'No VS Code logs found for the given user.' });
      return;
    }

    res.status(200).json({status: 200, message: "VS Code logs fetched successfully", data: logss });
  } catch (error) {
    console.error('Error fetching VS Code logs:', error);
    res.status(500).json({status: 500, error: 'Internal server error' });
  }
}