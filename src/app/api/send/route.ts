"use server";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited } from "../lib/rate-limit";
import { getAdminEmailTemplate } from "@/templates/admin-email-template";
import { getUserEmailTemplate } from "@/templates/user-email-template";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function POST(request: NextRequest) {
  try {
    const limited = await isRateLimited(request);

    if (limited) {
      return NextResponse.json(
        {
          error: "Você atingiu o limite de envios. Tente novamente mais tarde."
        },
        { status: 429 }
      );
    }

    const { name, email, message, phone } = await request.json();

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
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
        subject: "Sua mensagem foi recebida com sucesso! 🚀",
        html: getUserEmailTemplate({ name })
      })
    ]);

    return NextResponse.json(
      { success: true, message: "E-mails enviados com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no envio do e-mail ", error);
    return NextResponse.json(
      { error: "Falha ao enviar e-mail. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
