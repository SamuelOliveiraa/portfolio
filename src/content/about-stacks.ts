"use client";

import { useTranslations } from "next-intl";

export function useAboutStacks() {
  const t = useTranslations("About");

  return [
    { title: t("frontend"), stacks: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { title: t("backend"), stacks: ["Node.js", "Fastify", "Prisma ORM", "PostgreSQL", "Redis"] },
    { title: t("infrastructure"), stacks: ["Docker", "AWS", "Vercel", "GitHub Actions"] },
    { title: t("integrations"), stacks: ["Stripe", "Twilio", "Resend", "OpenAI API"] }
  ];
}
