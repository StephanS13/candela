require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Load environment variables from .htaccess or process.env
// const EMAIL_USER = process.env.EMAIL_USER || process.env["EMAIL_USER"];
// const EMAIL_PASS = process.env.EMAIL_PASS || process.env["EMAIL_PASS"];

// const { EMAIL_USER, EMAIL_PASS } = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465, // Use 587 if not working
  secure: true, // Use false if using port 587
  auth: {
    user: "contact@candelafilms.fr", // Your Hostinger email
    pass: "C@ndela13", // Your email password
  },
});

app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, // Must be your Hostinger email
    to: process.env.EMAIL_USER, // Receiving email (same Hostinger email)
    subject: "New Contact Form Submission",
    text: `From: ${email}\n\nMessage:\n${message}`,
    replyTo: email, // Allows you to reply directly to the sender
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
