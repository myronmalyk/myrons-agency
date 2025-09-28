// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const projectType = String(body.projectType || "").trim();
    const message = String(body.message || "").trim();
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      replyTo: email,
      subject: `New contact form — ${name} (${company || "No company"})`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company}\n` +
        `Project Type: ${projectType}\n` +
        `IP: ${ip}\n\n` +
        `Message:\n${message}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact send error:", err);
    return NextResponse.json(
      { ok: false, error: "Email send failed." },
      { status: 500 }
    );
  }
}
