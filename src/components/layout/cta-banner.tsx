"use client";

import Link from "next/link";
import { ButtonComponent, Text } from "@/components/common";
import { CalendarCheck } from "lucide-react";
import { FramerProvider } from "@/providers";
import { WHATSAPP_LINK } from "@/constants";
import { useTranslations } from "next-intl";

export default function CtaBanner() {
  const t = useTranslations("Cta");
  return (
    <FramerProvider>
      <section className="py-6 px-4 xl:px-0 md:py-10 border-y" id="cta-banner">
        <div className="max-w-6xl mx-auto border rounded-md px-6 py-10 md:p-14 flex flex-col md:items-center md:flex-row justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-4">
            <Text
              as="h3"
              className="text-emerald-500 uppercase"
              size="textGeist"
            >
              {t("eyebrow")}
            </Text>
            <Text as="h2" size="titleSmall" className="text-zinc-950">
              {t("title")}
            </Text>
            <Text as="p" className="max-w-md text-zinc-500">
              {t("description")}
            </Text>
          </div>
          <ButtonComponent className="w-fit p-3 gap-2" asChild>
            <Link
              href={WHATSAPP_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CalendarCheck className="size-4" />
              <Text className="text-xs">{t("action")}</Text>
            </Link>
          </ButtonComponent>
        </div>
      </section>
    </FramerProvider>
  );
}
