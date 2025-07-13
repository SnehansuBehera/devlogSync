import express from "express";
import prisma from "../config/prisma-config";
import { generateAccessToken, generateRefreshToken, setRefreshCookie } from "../utils/generateToken";


type Request = express.Request;
type Response = express.Response;

async function findOrCreateSocialUser(email: string, provider: string, providerAccountId: string, tokens: { accessToken?: string, refreshToken?: string, expiresAt?: Date }, image?: string, name?: string, githubUsername?: string, githubToken?: string) {
  let user = await prisma.user.findUnique({ where: { email } });
  let refreshToken="";
  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        isVerified: true,
        image,
        firstName: name?.split(' ')[0] || '',
        lastName: name?.split(' ')[1] || '',
        username: name?.split(' ')[0] || '',
        githubUsername,
        githubToken,
        accounts: {
          create: {
            provider,
            providerAccountId,
            ...tokens
          }
        }
      },
    });
    

  } else {
    const existingAccount = await prisma.account.findFirst({
      where: {
        provider,
        providerAccountId,
        userId: user.id
      },
    });
    if (!existingAccount) {
      await prisma.account.create({
        data: {
          provider,
          providerAccountId,
          userId: user.id,
          ...tokens
        },
      });
      
      const updates: any = {};
      if (!user.image && image) updates.image = image;
      if (!user.githubToken && githubToken) updates.githubToken = githubToken;
      if (!user.githubUsername && githubUsername) updates.githubUsername = githubUsername;

      if (Object.keys(updates).length > 0) {
          user = await prisma.user.update({
          where: { id: user.id },
          data: updates
      });
}


    }

  }
  if (provider !== "github") {
    const accessToken = generateAccessToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    refreshToken = generateRefreshToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    user = await prisma.user.update({
      where: { id: user.id },
      data: { accessToken }
    });
  }

  return {user, refreshToken};
}

export const socialAuthController = async (req: Request, res: Response): Promise<void> => {
  
    const {
    email,
    provider,
    providerAccountId,
    accessToken: providerAccessToken,
    refreshToken: providerRefreshToken,
    expiresAt,
    image,
      name,
      githubUsername,
    githubToken,
  } = req.body;
    if (!email || !provider || !providerAccountId) {
        res.status(400).json({ error: 'Missing fields' });
        return;
}

  try {
    const expiresAtDate = expiresAt ? new Date(Number(expiresAt) * 1000) : undefined;
    const { user, refreshToken: newRefreshToken } = await findOrCreateSocialUser(email, provider, providerAccountId,        {
          accessToken: providerAccessToken,
          refreshToken: providerRefreshToken,
          expiresAt: expiresAtDate,
        }, image, name, githubUsername,githubToken);
    if (!user) {
      res.status(400).json({
        status: 400,
        message: "Unable to login"
      });
      return;
    }
     const isProd = process.env.NODE_ENV === "production";
    res.cookie("accessToken", user.accessToken, {
      httpOnly: false, 
      secure: isProd,
      sameSite: isProd ? "none" : "lax",
      path: "/",
      maxAge: 1 * 24 * 60 * 60 * 1000
    });
    res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: isProd,
      sameSite: isProd ? "none" : "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.status(200).json({ message: 'Logged in successfully', user });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err });
  }
};
export const githubAuthController = async (req: Request, res: Response): Promise<void> => {
  
  const {
      email,
    provider,
    providerAccountId,
    accessToken: providerAccessToken,
    image,
    name,
    githubUsername,
    githubToken,
  } = req.body;
    if (!email || !provider || !providerAccountId) {
        res.status(400).json({ error: 'Missing fields' });
        return;
}

  try {
    const loginUser = req.user;
    const useremail = loginUser.email
    if (!loginUser) {
      res.status(400).json({
        status: 400,
        message: "Unauthorised"
      });
      return;
    }
    const { user, refreshToken: newRefreshToken } = await findOrCreateSocialUser(useremail, provider, providerAccountId,        {
          accessToken: providerAccessToken,
        }, image, name, githubUsername,githubToken);
    if (!user) {
      res.status(400).json({
        status: 400,
        message: "Unable to connect"
      });
      return;
    }
    res.status(200).json({ message: 'Github connected successfully', user });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err });
  }
};

