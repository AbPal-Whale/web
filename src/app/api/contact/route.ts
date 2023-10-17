import { type NextRequest } from "next/server";
const nodemailer = require("nodemailer");
const postmarkTransport = require("nodemailer-postmark-transport");

const postmarkApiKey = process.env.POSTMARK_API_KEY;
const from = process.env.POSTMARK_FROM;
const to = process.env.POSTMARK_TO;

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, phone, email, message } = data;

  if (!name || !email) {
    return new Response(JSON.stringify({ error: "Invalid data" }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport(
      postmarkTransport({
        auth: {
          apiKey: postmarkApiKey,
        },
      })
    );

    const mailOptions = {
      from,
      to,
      subject: "Contact Form Submission from " + name,
      html: `
      <td>${name}</td>
      <td>${phone}</td>
      <td>${email}</td>
      <td>${message}</td>
      `,
    };

    transporter.sendMail(mailOptions, (error: any) => {
      if (error) {
        return console.log(error);
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({}), { status: 500 });
  }

  return new Response(
    JSON.stringify({
      message: "Message sent successfully!",
    }),
    { status: 200 }
  );
}