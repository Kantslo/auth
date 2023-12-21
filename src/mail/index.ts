import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const gmailTransport = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

console.log(process.env.GMAIL_USER, process.env.GMAIL_PASSWORD)

gmailTransport.verify((error, _) => {
  if (error) {
      console.error('Error verifying transporter:', error);
  } else {
      console.log('Transporter is ready to send emails');
  }
});

export default gmailTransport;