import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.resolve(__dirname, ".env")});

import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
  const secretKey = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();
  return secretKey;
};

export const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGIRD_PASSWORD
    }
  };
  console.log(options, email);
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "welcome@petstagramm.com",
    to: address,
    subject: "🔐 Login Secret for Petstagram 🔐",
    html: `Hello! Your login secret is ${secret} <br/> Copy it and paste on the app/website to login!`
  };
  return sendMail(email);
};
