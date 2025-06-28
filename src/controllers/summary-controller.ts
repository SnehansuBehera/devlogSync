import { Request, Response } from 'express';
import { startOfDay, endOfDay } from 'date-fns';
import prisma from '../config/prisma-config';
// import genAI from '../config/gemini-config';
// import { openai } from '../config/gemini-config';
import axios from 'axios';

export const generateAISummary = async (commitLogs: any[], codingLogs: any[], user: any): Promise<string> => {
  
  const commitIds = commitLogs.map((c: any) => c.commitId);
  const commitsFromDB = await prisma.gitHubCommit.findMany({
    where: {
      id: { in: commitIds },
    },
    select: {
      id: true,
      message: true,
    },
  });

  const commitMessageMap = new Map(commitsFromDB.map(c => [c.id, c.message]));

  const formattedCommits = commitLogs
    .map((c: any) => {
      const message = commitMessageMap.get(c.commitId) || '[Unknown commit message]';
      console.log(message)
      const time = new Date(c.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `• ${message} at ${time}`;
    })
    .join('\n');

  const formattedCoding = codingLogs
    .map(cl => {
      const fileName = cl.activeFileName.split('\\').pop();
      return `• ${fileName} — ${cl.codingTime} minute(s)`;
    })
    .join('\n');

 const prompt = `
You're a professional AI assistant generating developer daily summaries.

Use this exact structure and tone:
1. Start with: "Developer [Name] contributed updates today by committing changes with [actual commit messages]" and list the messages with time.
2. Then write: "The primary file(s) worked on was/were ..." and mention each with time spent.
3. Then add a line describing the type of work — e.g., quick fixes, improvements, debugging, or enhancements.
4. End with: "Overall, the work suggests ..." and summarize the nature of the progress.

Avoid mentioning commit IDs or file paths. Mention only filenames and human-readable times.

Here is the data:
Developer: ${user.firstName || user.username}

Commits:
${formattedCommits}

Coding Activity:
${formattedCoding}

Now write the 4-line summary based on the structure and tone above.
`;

  const response = await axios.post(
    'https://api.together.xyz/v1/chat/completions',
    {
      model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      messages: [{ role: 'user', content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].message.content.trim();
};



export const generateAISummariesForAllUsers = async (req: Request, res: Response) => {
  try {
  const today = new Date().toISOString().slice(0, 10);
  const logs = await prisma.dailyLog.findMany({
    where: { date: new Date(today) },
    include: { user: true },
  });

  for (const log of logs) {
    const codingLogsRaw = Array.isArray(log.codingLogs)
      ? log.codingLogs
      : (typeof log.codingLogs === 'string'
          ? JSON.parse(log.codingLogs)
              : []);
    const codingLogs = codingLogsRaw.filter((logs: any)=>logs.include===true)
    const commitLogs = Array.isArray(log.commitLogs)
      ? log.commitLogs
      : (typeof log.commitLogs === 'string'
          ? JSON.parse(log.commitLogs)
          : []);
    if (!codingLogs?.length || !commitLogs?.length || log.aiSummary) continue;

    const summary = await generateAISummary(commitLogs, codingLogs, log.user);
    
     await prisma.dailyLog.update({
      where: { id: log.id },
      data: { aiSummary: summary },
    });
  }

  } catch (error) {
    console.error("Error in generating AI summaries for all users", error);
    res.status(500).json({
      status: 500,
      message: "Error in generating AI summaries for all users"
    })
  }
 
}

export const generateAISummaryForUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = req.user?.id
    // const today = new Date().toISOString().slice(0, 10);

    if (isNaN(userId)) {
      res.status(400).json({ status: 400, message: 'Invalid userId' });
      return;
    }

    const log = await prisma.dailyLog.findFirst({
      where: {
        userId,
        date: {
      gte: startOfDay(new Date()),
      lte: endOfDay(new Date()),
    },
      },
      include: { user: true },
    });

    if (!log) {
      res.status(404).json({ status: 404, message: 'No DailyLog found for today' });
      return;
    }

    const codingLogsRaw = Array.isArray(log.codingLogs)
      ? log.codingLogs
      : typeof log.codingLogs === 'string'
        ? JSON.parse(log.codingLogs)
        : [];

    const codingLogs = codingLogsRaw.filter((cl: any) => cl.include === true || cl.include === "true");

    const commitLogs = Array.isArray(log.commitLogs)
      ? log.commitLogs
      : typeof log.commitLogs === 'string'
        ? JSON.parse(log.commitLogs)
        : [];

    if (!codingLogs.length || !commitLogs.length) {
      res.status(400).json({ status: 400, message: 'Missing valid codingLogs or commitLogs' });
      return;
    }

    const summary = await generateAISummary(commitLogs, codingLogs, log.user);

    await prisma.dailyLog.update({
      where: { id: log.id },
      data: { aiSummary: summary },
    });

    res.status(200).json({
      status: 200,
      message: `AI summary generated successfully.`,
      summary,
    });

  } catch (error) {
    console.error('Error generating AI summary:', error);
    res.status(500).json({
      status: 500,
      message: 'Internal server error while generating AI summary',
    });
  }
};
