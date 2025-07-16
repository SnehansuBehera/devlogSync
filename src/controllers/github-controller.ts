import { Request, Response } from "express";
import axios from "axios";
import prisma from "../config/prisma-config";
import { startOfDay, endOfDay } from 'date-fns';

export const addGithubLinks = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, url, projectId } = req.body;

    // Validate required fields
    if (!name || !url || !projectId) {
      res.status(400).json({ message: "Name, URL, and project ID are required." });
      return;
    }

    // Validate authenticated user
    const user = req.user;
    if (!user || !user.email) {
      res.status(401).json({ message: "Unauthorized. User not found." });
      return;
    }

    // Fetch GitHub credentials from user
    const owner = await prisma.user.findUnique({
      where: { email: user.email },
      select: { githubUsername: true, githubToken: true },
    });

    if (!owner || !owner.githubUsername || !owner.githubToken) {
      res.status(404).json({ message: "GitHub credentials not found for user." });
      return;
    }

    // Save repository details in database
    const githubRepo = await prisma.gitHubRepo.create({
      data: {
        name,
        url,
        projectId,
      },
    });

    // Create webhook on GitHub
    const webhookUrl = "https://devlogsync.onrender.com/api/github/github/webhook";

    if (!process.env.GITHUB_WEBHOOK_SECRET) {
      console.warn("⚠️ GITHUB_WEBHOOK_SECRET is not set. Using fallback.");
    }

    let response;
    try {
      console.log("GitHub webhook payload:", {
  repoOwner: owner.githubUsername,
  repoName: name,
  fullUrl: `https://api.github.com/repos/${owner.githubUsername}/${name}/hooks`,
});

      response = await axios.post(
        `https://api.github.com/repos/${owner.githubUsername}/${name}/hooks`,
        {
          name: "web",
          active: true,
          events: ["push", "ping"],
          config: {
            url: webhookUrl,
            content_type: "json",
            secret: process.env.GITHUB_WEBHOOK_SECRET || "fallback-secret",
            insecure_ssl: "0",
          },
        },
        {
          headers: {
            Authorization: `Bearer ${owner.githubToken}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "axios",
          },
        }
      );
    } catch (githubError: any) {
      console.error("GitHub webhook error:", githubError.response?.data || githubError.message);
      res.status(500).json({
        message: "Failed to create webhook on GitHub",
        details: githubError.response?.data || githubError.message,
      });
      return;
    }

    // Update webhook ID in database
    const hookId = response.data.id;
    await prisma.gitHubRepo.update({
      where: { id: githubRepo.id },
      data: { webHookId: hookId },
    });

    res.status(201).json({
      message: "GitHub link added successfully",
      githubRepo,
    });
  } catch (error: any) {
    console.error("Error adding GitHub links:", error.stack || error.message || error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// export const updateGithubTokens = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const code = req.query.code;
//     console.log(`Received code: ${code}`);
//     if (!code || typeof code !== 'string') {
//       res.status(400).send('Invalid or missing code parameter');
//       return;
//     }

//     const tokenRes = await axios.post(
//       'https://github.com/login/oauth/access_token',
//       {
//         client_id: process.env.GITHUB_CLIENT_ID!,
//         client_secret: process.env.GITHUB_CLIENT_SECRET!,
//         code
//       },
//       {
//         headers: { Accept: 'application/json' }
//       }
//     );

//     console.log("GitHub Token Response:", tokenRes.data);

//     const accessToken = tokenRes.data.access_token;
//     if (!accessToken) {
//         res.status(401).json({ status: 401, message: 'Access token is missing' });
//         return;
//     }

//     const userRes = await axios.get('https://api.github.com/user', {
//       headers: { Authorization: `Bearer ${accessToken}` }
//     });

//     const githubUsername = userRes.data.login;

//     await prisma.user.update({
//       where: { email: req.user.email }, 
//       data: {
//         githubToken: accessToken,
//         githubUsername: githubUsername
//       }
//     });

//     res.send('GitHub connected. You can now link your repos.');
//   } catch (error) {
//     console.error("OAuth Callback Error:", error);
//     res.status(500).json({ message: 'GitHub OAuth failed', error });
//   }
// };

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
      //------------dailyLog--------------
      if (!repo.projectId) {
  console.error("GitHub repo does not have a linked projectId.");
        res.status(400).send("GitHub repo is missing a projectId");
        return;
}

const existingDailyLog = await prisma.dailyLog.findFirst({
  where: {
    userId: user.id,
    projectId: repo.projectId,
    date: commitDate,
  },
});

if (!existingDailyLog) {
  await prisma.dailyLog.create({
    data: {
      userId: user.id,
      projectId: repo.projectId,
      date: commitDate,
      commitLogs: [newCommitLog],
      codingLogs: [],
      flag: false,
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

export const getProjectCommitsForDate = async (req: Request, res: Response) => {
  try {
    const { projectId, date } = req.query;

    if (!projectId || !date) {
      res.status(400).json({ error: "projectId and date are required" });
      return;
    }
    const userId = req.user?.id; 

    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    const targetDate = new Date(date as string);


const logs = await prisma.dailyLog.findMany({
  where: {
    userId: userId,
    projectId: Number(projectId),
    date: targetDate,
  },
});
    if (logs.length === 0) {
      res.status(400).json({
      status: 400,
      message: "No logs found",
      });
      return;
    }
const commitIds = logs.flatMap((log) =>
  (Array.isArray(log.commitLogs) ? log.commitLogs : []).map((c: any) => c.commitId)
);

    const commits = await prisma.gitHubCommit.findMany({
      where: {
        id: { in: commitIds },
      },
      orderBy: {
        timing: "asc",
      },
    });

// Filter only required fields
    const filteredCommits = commits.map(commit => ({
      id: commit.id,
      time: commit.timing,
      message: commit.message,
    }));

  res.status(200).json({status:200, message:"Commits retrieved successfully", commits: filteredCommits });
  } catch (err) {
    console.error("Error fetching project commits:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUnexportedLogsByProjectAndUser = async (req: Request, res: Response) => {
  try {
    const {projectId } = req.query;
    const userId = req.user?.id; 

    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    if (!projectId) {
      res.status(400).json({ error: "projectId are required" });
      return;
    }

    const logs = await prisma.dailyLog.findMany({
      where: {
        userId: Number(userId),
        projectId: Number(projectId),
        flag: false,
      },
      select: {
        id: true,
        date: true,
      },
      orderBy: {
        date: "asc",
      },
    });
    if (logs.length === 0) {
      res.status(400).json({
      status: 400,
      message: "No Unexported logs found",
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: "Unexported logs retrieved successfully",
      logs,
    });
  } catch (err) {
    console.error("Error fetching unexported logs:", err);
    res.status(500).json({ error: "Internal Server Error" });
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


