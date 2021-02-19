import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
  const secretKey = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();
  return secretKey;
};

export const sendMail = (email) => {
  const options = {
    auth: {
      api_key: process.env.SENDGRID_APIKEY,
    },
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "welcome@petstagramm.com",
    to: address,
    subject: "🔐 Login Secret for Petstagram 🔐",
    html: `Hello! Your login secret is <strong>${secret}</strong>. Copy it and paste on the app/website to login!`,
  };
  const result = sendMail(email);
  console.log("result");
  console.log(result);
  return result;
};

export const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET);
