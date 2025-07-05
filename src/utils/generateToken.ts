import jwt from 'jsonwebtoken';


export const generateAccessToken = (payload: object | string | Buffer) => {
    const secret = process.env.ACCESS_TOKEN_SECRET;
    if (!secret) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }
    const options: jwt.SignOptions = {
        expiresIn: '1d',
    }
    return jwt.sign(payload, secret, options);
};

export const generateRefreshToken = (payload: object | string | Buffer) => {
    const secret = process.env.REFRESH_TOKEN_SECRET;
    if (!secret) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }
    const options: jwt.SignOptions = {
        expiresIn: '7d',
    }
    const refreshToken = jwt.sign(payload, secret, options);
    return refreshToken;
};

export const setRefreshCookie = (res: any, token: string) => {
    res.cookie('refreshToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
}