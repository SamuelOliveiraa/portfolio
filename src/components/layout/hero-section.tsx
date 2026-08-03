"use client";

import { ArrowRight } from "lucide-react";
import { ButtonComponent, ScrollLink, Text } from "../common";
import { TypingAnimation } from "../ui/typing-animation";
import MetricsComponent from "./metrics-component";
import { FramerProvider } from "@/providers";
import { useTypingText } from "@/content";
import { WHATSAPP_LINK } from "@/constants";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const typingText = useTypingText();

  return (
    <FramerProvider>
      <section
        className="flex flex-col px-4 xl:px-0 gap-6 max-w-6xl mx-auto my-10 lg:mt-16"
        id="hero-section"
      >
        <Text as="h3" size="textGeist" className="text-emerald-500 uppercase">
          {t("eyebrow")}
        </Text>
        <Text as="h2" size="titleLarge" as="h1">
          <span className="text-zinc-950 block">{t("title")}</span>
          {t("titleSuffix")}{" "}
          <span className="text-emerald-900 block">
            <TypingAnimation
              className="leading-10 sm:leading-5"
              words={typingText}
            />
          </span>
        </Text>
        <Text as="p" size="textMedium" className="max-w-lg text-zinc-500">
          {t("description")}
        </Text>
        <div className="flex flex-col sm:flex-row gap-5">
          <ButtonComponent asChild className="w-fit">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("budget")}
              <ArrowRight className="size-4 text-white" />
            </Link>
          </ButtonComponent>
          <ButtonComponent variant="outline" className="w-fit" asChild>
            <ScrollLink targetId="about">{t("projects")}</ScrollLink>
          </ButtonComponent>
        </div>
        <MetricsComponent />
      </section>
    </FramerProvider>
  );
}
