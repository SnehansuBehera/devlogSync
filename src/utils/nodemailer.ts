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

export const emailDailyReport = async (userdetails: any, ownerEmail: string, exportUrl: string) => {
  try {
    await transporter.sendMail({
      from: `${userdetails.firstName} ${userdetails.lastName}" <${process.env.EMAIL_USER}>`,
      to: ownerEmail,
      replyTo: userdetails.email,
      subject: `${userdetails.username} Daily Report [ ${new Date().toISOString().slice(0, 10)} ]`,
      html: `
        <h3>${userdetails.firstName} ${userdetails.lastName},</h3>
        <p>Daily development report is ready. You can download it using the link below:</p>
        <a href="${exportUrl}">Download Daily Report PDF</a>
        <br><br>
        <p>Thanks,<br>DevLogSync</p>
      `,
    })
  } catch (error) {
    console.error("Error in nodemailer to send report:", error);
  }
} 
