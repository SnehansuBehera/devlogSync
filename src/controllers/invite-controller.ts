import { Request, Response } from 'express';
import  prisma  from '../config/prisma-config';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const sendInvite = async (req: Request, res: Response) => {
    try {
        const { email, projectId } = req.body;
  if (!email || !projectId) {
    return res.status(400).json({ error: "Email and projectId are required" });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  await prisma.invitation.create({
    data: { email, projectId: Number(projectId), token, expiresAt }
  });

  const inviteLink = `http://localhost:3000/accept-invite?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"DevLogSync" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "You’ve been invited to a DevLogSync project!",
    html: `<p>You’ve been invited to join a project. Click below to accept:</p>
           <a href="${inviteLink}">Accept Invite</a>
           <p>This link will expire in 1 hour.</p>`
  });

  res.status(200).json({ message: "Invitation sent successfully" });
    } catch (error) {
        console.error("Error sending invite:", error);
        return res.status(500).json({ error: "Failed to send invitation" });
        
    }
  
};


export const acceptInvite = async (req: Request, res: Response) => {
    try {
        const { token } = req.query;
  const userId = req.user?.id;

  if (!token || !userId) {
    return res.status(400).json({ error: "Token and user must be provided" });
  }

  const invite = await prisma.invitation.findUnique({ where: { token: token as string } });
  if (!invite || invite.expiresAt < new Date() || invite.accepted) {
    return res.status(400).json({ error: "Invalid or expired invitation" });
  }

  await prisma.project.update({
    where: { id: invite.projectId },
    data: {
      members: {
        connect: { id: userId }
      }
    }
  });

  await prisma.invitation.update({
    where: { token: token as string },
    data: { accepted: true }
  });

  res.status(200).json({ message: "Invitation accepted" });
    } catch (error) {
        console.error("Error accepting invite:", error);
        return res.status(500).json({ error: "Failed to accept invitation" });
        
    }
  
};
