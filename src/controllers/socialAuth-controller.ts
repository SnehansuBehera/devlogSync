import express from "express";
import prisma from "../config/prisma-config.ts";


type Request = express.Request;
type Response = express.Response;

async function findOrCreateSocialUser(email: string, provider: string, providerAccountId: string, tokens: { accessToken?: string, refreshToken?: string, expiresAt?: Date }, image?: string, name?: string) {
  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        isVerified: true,
        image,
        firstName: name?.split(' ')[0] || '',
        lastName: name?.split(' ')[1] || '',
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
      if(!user.image && image) {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { image }
        });
      }
    }
  }

  return user;
}

export const socialAuthController = async (req: Request, res: Response): Promise<void> => {
    const { email, provider, providerAccountId, accessToken, refreshToken, expiresAt, image, name } = req.body;

    if (!email || !provider || !providerAccountId) {
        res.status(400).json({ error: 'Missing fields' });
        return;
}

  try {
    const expiresAtDate = expiresAt ? new Date(Number(expiresAt) * 1000) : undefined;
    const user = await findOrCreateSocialUser(email, provider, providerAccountId, { accessToken, refreshToken, expiresAt: expiresAtDate }, image, name);
    res.status(200).json({ message: 'Logged in successfully', user });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong', details: err });
  }
};

