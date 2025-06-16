import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { Response } from 'express';

export const generateAccessToken = (payload: object | string | Buffer) => {
    const secret: Secret|undefined  = process.env.ACCESS_TOKEN_SECRET;
    if (!secret) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }
    const options: SignOptions = {
        expiresIn: '15m',
    }
    return jwt.sign(payload, secret, options);
};

export const generateRefreshToken = (payload: object | string | Buffer) => {
    const secret: Secret|undefined = process.env.REFRESH_TOKEN_SECRET;
    if (!secret) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }
    const options: SignOptions = {
        expiresIn: '7d',
    }
    const refreshToken = jwt.sign(payload, secret, options);
    return refreshToken;
};

export const setRefreshCookie = (res: Response, token: string) => {
    res.cookie('refreshToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
}