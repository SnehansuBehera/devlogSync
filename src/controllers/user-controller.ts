import { Request, Response } from "express";
import prisma from "../config/prisma-config.ts";
import bcrypt from "bcryptjs";
import { generateAccessToken, generateRefreshToken, setRefreshCookie } from "../utils/generateToken.ts";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response):Promise<void> => {
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
        
        const accessToken = generateAccessToken({
            username,
            email,
    
        });
        const refreshToken = generateRefreshToken({
            username,
            email,
        })
        setRefreshCookie(res, refreshToken);
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName: lastName,
                email,
                password: hashedPassword,
                username,
                accessToken
            }
        });

        res.status(201).json({
            status: 201,
            message: "User registered successfully",
            user,
            refreshToken
        });   
    } catch (error) {
        console.error("Error in Register:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

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
        });
        const refreshToken = generateRefreshToken({
            username: user.username,
            email: user.email,
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
            const newAccessToken = generateAccessToken({ username: (decode as any).username, email: (decode as any).email });
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