import gmailTransport from "./index.js";
import dotenv from "dotenv";
import { verify } from "./templates/verify.js";

dotenv.config();



const send = (to: string, subject: string, html: any) => {
  const options = {
    to,
    subject,
    html,
    from: process.env.GMAIL_USER,
  };
  console.log(options)
  return gmailTransport.sendMail(options);
};

export const sendVerificationLink = async (to: string, name: string, link: string) => {
  const html = verify(name, link);

  return send(to, "Verify Email", html);
};