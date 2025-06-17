import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
// console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtpEmail = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: `"DevLogSync" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your Verification Code',
    html: `
      <h2>Email Verification</h2>
      <p>Your verification code is:</p>
      <h1>${otp}</h1>
      <p>This code will expire in ${process.env.OTP_EXPIRES_IN_MINUTES || 10} minutes.</p>
    `,
  });
};
