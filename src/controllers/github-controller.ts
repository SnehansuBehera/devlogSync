import { Request, Response } from "express";
import axios from "axios";
import prisma from "../config/prisma-config";

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
        console.log("Creating webhook for:", {
  repo: `${owner?.githubUsername}/${name.toLowerCase()}`,
  payload: {
    name: 'web',
    active: true,
    events: ['push'],
    config: {
      url: 'https://a80c-...ngrok.../api/webhook/github',
      content_type: 'json',
      secret: process.env.GITHUB_WEBHOOK_SECRET
    }
  }
});

const response = await axios.post(
  `https://api.github.com/repos/${owner?.githubUsername}/${name.toLowerCase()}/hooks`,
  {
    name: 'web',
    active: true,
    events: ['push'],
    config: {
      url: 'https://a80c-...ngrok.../api/webhook/github',
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

    // Use your auth logic to find current user
    await prisma.user.update({
      where: { email: req.user.email }, // this assumes req.user is already set via auth middleware
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
  console.log("🌐 Received webhook:", event);
  console.log("🧾 Content-Type:", req.headers['content-type']);
  console.log("📦 Raw payload body:", JSON.stringify(req.body));

  if (event !== 'push') {
    console.log("❌ Ignoring non-push event");
    res.status(200).send('Ignored');
    return;
  }

  try {
    // ✅ If payload is stringified JSON inside `req.body.payload`, parse it
    let payload: any;
    if (typeof req.body.payload === 'string') {
      payload = JSON.parse(req.body.payload);
    } else {
      payload = req.body;
    }

    const { repository, commits, pusher } = payload;

    if (!repository || !commits || !pusher) {
      console.log("❌ Invalid payload structure:", payload);
        res.status(400).send("Invalid payload");
        return;
    }
    const url = repository.html_url+".git";
    // Step 1: Find repo
    const repo = await prisma.gitHubRepo.findFirst({
      where: { url: url },
    });

    if (!repo) {
      console.log("❌ Repo not found:", url);
        res.status(404).send('Repo not found');
        return;
    }

    // Step 2: Find user
    const user = await prisma.user.findFirst({
      where: { githubUsername: pusher.name },
    });

    if (!user) {
      console.log("❌ User not found:", pusher.name);
        res.status(404).send('User not found');
        return;
    }

    // Step 3: Create GitHubCommitGroup
    const commitGroup = await prisma.gitHubCommitGroup.create({
      data: {
        repoId: repo.id,
        userId: user.id,
      },
    });

    // Step 4: Insert each commit
    for (const commit of commits) {
      const commitDate = new Date(commit.timestamp);

      await prisma.gitHubCommit.create({
        data: {
          repoId: repo.id,
          userId: user.id,
          commitDate,
          timing: commitDate,
          message: commit.message,
          gitHubCommitGroupId: commitGroup.id,
        },
      });

      console.log(`✅ Commit inserted: "${commit.message}" at ${commit.timestamp}`);
    }

    console.log("✅ All commits recorded successfully");
    res.status(200).send('Commits recorded');
  } catch (err) {
    console.error("🔥 Webhook handler error:", err);
    res.status(500).send('Internal Server Error');
  }
};
