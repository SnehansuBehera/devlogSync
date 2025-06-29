import { Request, Response } from "express";
import axios from "axios";
import prisma from "../config/prisma-config";
import { startOfDay, endOfDay } from 'date-fns';

export const addGithubLinks = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, url, projectId } = req.body;
        if (!name || !url || !projectId) {
            res.status(400).json({ message: "Name, URL, and project ID are required." });
            return;
        }
        const user = req.user;
        const owner = await prisma.user.findUnique({
            where: { email: user.email },   
            select: { githubUsername: true, githubToken: true }
        });
        const githubRepo = await prisma.gitHubRepo.create({
            data: {
                name,
                url,
                projectId
            }
        });

const response = await axios.post(
  `https://api.github.com/repos/${owner?.githubUsername}/${name.toLowerCase()}/hooks`,
  {
    name: 'web',
    active: true,
    events: ['push', 'ping'],
    config: {
      url: 'https://16ed-2405-201-8021-50db-7d51-f520-71e2-644f.ngrok-free.app/api/github/github/webhook',
      content_type: 'json',
      secret: process.env.GITHUB_WEBHOOK_SECRET || 'fallback-secret',
      insecure_ssl: '0'
    }
  },
  {
    headers: {
      Authorization: `Bearer ${owner?.githubToken}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'axios'
    }
  }
);

        const hookId = response.data.id;
        await prisma.gitHubRepo.update({
            where: { id: githubRepo.id },
            data: { webHookId: hookId }
        });

        res.status(201).json({ message: "GitHub link added successfully", githubRepo });
    } catch (error) {
        console.error("Error adding GitHub links:", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}

export const updateGithubTokens = async (req: Request, res: Response): Promise<void> => {
  try {
    const code = req.query.code;
    console.log(`Received code: ${code}`);
    if (!code || typeof code !== 'string') {
      res.status(400).send('Invalid or missing code parameter');
      return;
    }

    const tokenRes = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID!,
        client_secret: process.env.GITHUB_CLIENT_SECRET!,
        code
      },
      {
        headers: { Accept: 'application/json' }
      }
    );

    console.log("GitHub Token Response:", tokenRes.data);

    const accessToken = tokenRes.data.access_token;
    if (!accessToken) {
        res.status(401).json({ status: 401, message: 'Access token is missing' });
        return;
    }

    const userRes = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    const githubUsername = userRes.data.login;

    await prisma.user.update({
      where: { email: req.user.email }, 
      data: {
        githubToken: accessToken,
        githubUsername: githubUsername
      }
    });

    res.send('GitHub connected. You can now link your repos.');
  } catch (error) {
    console.error("OAuth Callback Error:", error);
    res.status(500).json({ message: 'GitHub OAuth failed', error });
  }
};

export const handleGitHubWebhook = async (req: Request, res: Response): Promise<void> => {
  const event = req.headers['x-github-event'];

  if (event !== 'push') {
    console.log("Ignoring non-push event");
    res.status(200).send('Ignored');
    return;
  }

  try {
    let payload: any = req.body;
    if (typeof req.body.payload === 'string') {
      payload = JSON.parse(req.body.payload);
    }

    const { repository, commits, pusher } = payload;

    if (!repository || !commits || !pusher) {
      res.status(400).send("Invalid payload");
      return;
    }

    const url = repository.html_url + ".git";
    const repo = await prisma.gitHubRepo.findFirst({ where: { url } });
    if (!repo) {
      console.log("Repo not found:", url);
      res.status(404).send('Repo not found');
      return;
    }

    const user = await prisma.user.findFirst({ where: { githubUsername: pusher.name } });
    if (!user) {
      console.log("User not found:", pusher.name);
      res.status(404).send('User not found');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of day

    // ✅ Check for existing group for user+repo+today
    let commitGroup = await prisma.gitHubCommitGroup.findFirst({
      where: {
        userId: user.id,
        repoId: repo.id,
        commits: {
          some: {
            commitDate: today,
          },
        },
      },
      include: {
        commits: true,
      },
    });

    // ❌ If not found, create a new one
    if (!commitGroup) {
      commitGroup = await prisma.gitHubCommitGroup.create({
        data: {
          repoId: repo.id,
          userId: user.id,
          commits: {
            create: []
          }
        },
        include: {
          commits: true
        }
      });
    }

    for (const commit of commits) {
      const commitDateTime = new Date(commit.timestamp);
      const commitDate = new Date(commitDateTime);
      commitDate.setHours(0, 0, 0, 0);

      const newCommit = await prisma.gitHubCommit.create({
        data: {
          commitDate: commitDate,
          timing: commitDateTime,
          message: commit.message,
          gitHubCommitGroupId: commitGroup.id,
        },
      });

      const newCommitLog = {
        commitId: newCommit.id,
        time: newCommit.timing,
      };

      const existingDailyLog = await prisma.dailyLog.findFirst({
        where: {
          userId: user.id,
          date: commitDate,
        },
      });

      if (!existingDailyLog) {
        await prisma.dailyLog.create({
          data: {
            userId: user.id,
            date: commitDate,
            commitLogs: [newCommitLog],
            codingLogs: [],
          },
        });
      } else {
        const currentCommits = (existingDailyLog.commitLogs as any[]) || [];
        currentCommits.push(newCommitLog);

        await prisma.dailyLog.update({
          where: { id: existingDailyLog.id },
          data: {
            commitLogs: currentCommits,
          },
        });
      }

      console.log(`Commit inserted: "${commit.message}" at ${commitDateTime.toISOString()}`);
    }

    console.log("All commits recorded successfully");
    res.status(200).send('Commits recorded');
  } catch (err) {
    console.error("Webhook handler error:", err);
    res.status(500).send('Internal Server Error');
  }
};





export const getCommitsByDate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { date } = req.query;
    const userId = req.user?.id;
    if (!userId || !date) {
      res.status(400).json({ message: "Missing userId or date (YYYY-MM-DD)" });
      return;
    }

    const parsedDate = new Date(date as string);

    const commits = await prisma.gitHubCommit.findMany({
      where: {
        commitDate: {
          gte: startOfDay(parsedDate),
          lte: endOfDay(parsedDate),
        },
        GitHubCommitGroup: {
          userId: parseInt(userId as string),
        },
      },
      include: {
        GitHubCommitGroup: {
          select: {
            repo: {
              select: { name: true, url: true },
            },
          },
        },
      },
      orderBy: {
        timing: 'asc',
      },
    });

    const formatted = commits.map(commit => ({
      message: commit.message,
      date: commit.commitDate,
      time: commit.timing,
      repo: commit.GitHubCommitGroup?.repo,
    }));

    res.status(200).json({ commits: formatted });
  } catch (err) {
    console.error("Error fetching commits:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


