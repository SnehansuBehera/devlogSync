import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";


declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const jwtVerify = async (req: Request, res: Response, next: NextFunction):Promise<void> => {

    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ status: 401, message: "Access token is missing" });
      return;
    }

    try {
        const secret: string | undefined = process.env.ACCESS_TOKEN_SECRET;
        if (!secret) {
            throw new Error('ACCESS_TOKEN_SECRET is not defined');
        }

        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("JWT verification error:", error);
        res.status(403).json({ status: 403, message: "Invalid or expired token" });
    }
}
