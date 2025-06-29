import express from "express";
import prisma from "../config/prisma-config";
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken, setRefreshCookie } from "../utils/generateToken";
import jwt from "jsonwebtoken";
import generateOtp, { setOtp, getOtp, clearOtp, isInCooldown } from "../utils/otpUtils";
import { sendOtpEmail } from "../utils/nodemailer";

type Request = express.Request;
type Response = express.Response;
const otpExpiryMin = parseInt(process.env.OTP_EXPIRES_IN_MINUTES || '10');
const cooldownSec = parseInt(process.env.OTP_COOLDOWN_SECONDS || '60');

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, password, username } = req.body;

    if (!firstName || !lastName || !email || !password || !username) {
      res.status(400).json({ status: 400, message: "All fields are required" });
      return;
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      res.status(409).json({ status: 409, message: "Email or username already exists" });
      return;
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const otp = generateOtp();

    const createdUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        username,
      }
    });

    const accessToken = generateAccessToken({
      id: createdUser.id,
      username,
      email,
    });

    const refreshToken = generateRefreshToken({
      id: createdUser.id,
      username,
      email,
    });

    await prisma.user.update({
      where: { id: createdUser.id },
      data: { accessToken }
    });

    setRefreshCookie(res, refreshToken);

    setOtp(email, otp, otpExpiryMin, cooldownSec);
    await sendOtpEmail(email, otp);

    res.status(201).json({
      status: 201,
      message: "User registered successfully, OTP sent to email",
      user: {
        id: createdUser.id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
        username: createdUser.username,
        accessToken,
      },
      refreshToken
    });

  } catch (error) {
    console.error("Error in Register:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const login = async (req: Request, res: Response):Promise<void> => { 
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ status: 400, message: "Email and password are required" });
            return
        }
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if(!user) {
            res.status(404).json({ status: 404, message: "User not found" });
            return;
        }
        if (!user.password) {
            res.status(500).json({ status: 500, message: "User password is missing" });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ status: 401, message: "Invalid credentials" });
            return;
        }
        const accessToken = generateAccessToken({
            username: user.username,
            email: user.email,
            id: user.id
        });
        const refreshToken = generateRefreshToken({
            username: user.username,
            email: user.email,
            id: user.id
        });
        setRefreshCookie(res, refreshToken)
        await prisma.user.update({
            where: { email },
            data: { accessToken }
        });
        res.status(200).json({
            status: 200,
            message: "Login successful",
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                accessToken
            }
        });
    } catch (error) {
        console.error("Error in Login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const accessTokenUsingRefreshToken = async (req: Request, res: Response):Promise<void> => { 
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) {
            res.status(401).json({ status: 401, message: "Refresh token is required" });
            return;
        }
        const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string);
        if (typeof decode === "object" && decode !== null && "username" in decode && "email" in decode) {
            const newAccessToken = generateAccessToken({ username: (decode as any).username, email: (decode as any).email, id: (decode as any).id });
          res.status(201).json({status: 201,message:"Access token created successfully", accessToken: newAccessToken });
        } else {
            res.status(401).json({ status: 401, message: "Invalid refresh token" });
            return;
        }
    } catch (error) {
        console.error("Error in creating accessToken:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logout = (req: Request, res: Response) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
  res.json({ message: "Logged out successfully" });
};

export const verifyOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, code } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
  }  
    if (user.isVerified) {
        res.status(400).json({ message: 'Already verified' });
        return;
    }

  const record = getOtp(email);
  if (!record || record.otp !== code) {
      res.status(400).json({ message: 'Invalid or expired OTP' });
      return;
  }

  if (new Date() > record.expiresAt) {
      res.status(400).json({ message: 'OTP expired' });
      return;
  }

  await prisma.user.update({
    where: { email },
    data: { isVerified: true },
  });

  clearOtp(email);
    res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.error("Error in verifyOtp:", error);
        res.status(500).json({ error: "Internal Server Error" });
        
    }
  
    
};

export const resendOtp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    if (user.isVerified) {
       
        res.status(400).json({ message: 'Already verified' });
        return;
    }

  if (isInCooldown(email)) {
      res.status(429).json({ message: 'Please wait before requesting a new OTP' });
      return;
  }

  const otp = generateOtp();
  setOtp(email, otp, otpExpiryMin, cooldownSec);
  await sendOtpEmail(email, otp);

  res.status(200).json({ message: 'New OTP sent' });
    } catch (error) {
        console.error("Error in resending otp:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
  
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const { username, email, firstName, lastName, image } = req.body;

    if (!userId) {
      res.status(400).json({ status: 400, message: "User ID is required" });
      return;
    }
    if (email) {
      const emailExists = await prisma.user.findFirst({
        where: {
          email,
          NOT: { id: userId },
        },
      });
      if (emailExists) {
        res.status(409).json({ status: 409, message: "Email already in use" });
        return;
      }
    }

    if (username) {
      const usernameExists = await prisma.user.findFirst({
        where: {
          username,
          NOT: { id: userId },
        },
      });
      if (usernameExists) {
        res.status(409).json({ status: 409, message: "Username already in use" });
        return;
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        email,
        firstName,
        lastName,
        image,
      },
    });

    res.status(200).json({
      status: 200,
      message: "Profile updated successfully",
      user: {
        id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        image: updatedUser.image,
      },
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error while updating profile",
    });
  }
};
