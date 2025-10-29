import axios from "axios";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS, 
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// Send message to Telegram
async function sendTelegramMessage(token, chatId, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, { chat_id: chatId, text: message });
    return res.data.ok;
  } catch (err) {
    console.error("Telegram error:", err.response?.data || err.message);
    return false;
  }
}

// Email template
function generateEmailTemplate(name, email, userMessage) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #007BFF;">📩 New Portfolio Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px;">${userMessage}</blockquote>
    </div>
  `;
}

// Send email via Nodemailer
async function sendEmail({ name, email, message }) {
  const mailOptions = {
    from: `"Portfolio" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New message from ${name}`,
    html: generateEmailTemplate(name, email, message),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.error("Email error:", err.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "All fields required." }, { status: 400 });
    }

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramToken || !telegramChatId) {
      console.error("Missing Telegram credentials");
    }

    const formattedMessage = `💬 New message from ${name}\n\n📧 Email: ${email}\n\n📝 Message:\n${message}`;

    // Run both in parallel
    const [emailSent, telegramSent] = await Promise.all([
      sendEmail({ name, email, message }),
      telegramToken && telegramChatId
        ? sendTelegramMessage(telegramToken, telegramChatId, formattedMessage)
        : [false],
    ]);

    if (emailSent || telegramSent) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 });
    }
  } catch (error) {
    console.error("Server Error:", error.message);
    return NextResponse.json({ success: false, message: "Server error occurred." }, { status: 500 });
  }
}
