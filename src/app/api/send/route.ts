"use server";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited } from "../lib/rate-limit";
import { getAdminEmailTemplate } from "@/templates/admin-email-template";
import { getUserEmailTemplate } from "@/templates/user-email-template";
import ptMessages from "@/messages/pt.json";
import enMessages from "@/messages/en.json";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function POST(request: NextRequest) {
  const defaultLocale =
    request.cookies.get("NEXT_LOCALE")?.value === "en" ? "en" : "pt";
  let messages = defaultLocale === "en" ? enMessages : ptMessages;

  try {
    const limited = await isRateLimited(request);

    if (limited) {
      return NextResponse.json(
        {
          error: messages.Api.rateLimit
        },
        { status: 429 }
      );
    }

    const { name, email, message, phone, locale } = await request.json();
    messages = locale === "en" ? enMessages : ptMessages;

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: messages.Api.requiredFields },
        { status: 400 }
      );
    }

    await Promise.all([
      transporter.sendMail({
        from: `"Portfólio | Contato" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `[Novo Lead] Solicitação de Projeto - ${name}`,
        html: getAdminEmailTemplate({ name, email, phone, message })
      }),

      transporter.sendMail({
        from: `"Samuel Oliveira" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: messages.Email.subject,
        html: getUserEmailTemplate({ name, content: messages.Email })
      })
    ]);

    return NextResponse.json(
      { success: true, message: messages.Api.success },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no envio do e-mail ", error);
    return NextResponse.json({ error: messages.Api.error }, { status: 500 });
  }
}
