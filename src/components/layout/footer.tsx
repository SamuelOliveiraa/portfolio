"use client";

import { ButtonComponent, LinkItem, Logo, Text, ScrollLink } from "../common";
import { ChevronUp } from "lucide-react";
import { FramerProvider } from "@/providers";
import { SocialLinks } from "./components";
import { SECTIONS_LINKS } from "@/constants";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Header");
  return (
    <FramerProvider>
      <footer className="px-4 xl:p-0 border-t" id="footer">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex flex-col gap-10 md:flex-row justify-between px-4 lg:px-0 py-10">
            <div className="flex flex-col gap-4">
              <Logo />
              <Text className="text-zinc-600 max-w-56">{t("description")}</Text>
              <Text
                size="textGeist"
                className="text-zinc-700/50 dark:text-zinc-700"
              >
                Samuel Oliveira de Araujo · CNPJ 12.345.678/0001-90
              </Text>
              <SocialLinks />
            </div>
            <div className="text-zinc-500 flex flex-col md:flex-row gap-10">
              <nav>
                <ul className="flex flex-col gap-3">
                  <Text as="li" className="text-xs text-zinc-700 select-none">
                    {t("navigation")}
                  </Text>
                  {SECTIONS_LINKS.filter(({ link }) => link !== "root").map(
                    ({ link }) => (
                      <LinkItem key={link} link={link}>
                        {nav(link as "projects")}
                      </LinkItem>
                    )
                  )}
                </ul>
              </nav>
              <nav>
                <ul className="flex flex-col gap-3">
                  <Text as="li" className="text-xs text-zinc-700 select-none">
                    {t("legal")}
                  </Text>
                  <LinkItem link="/privacy-policy">{t("privacy")}</LinkItem>
                  <LinkItem link="/terms-of-use">{t("terms")}</LinkItem>
                  <Text as="li">CNPJ: 12.345.678/0001-90</Text>
                </ul>
              </nav>
            </div>
          </div>
          <div className="border-t py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <Text
              size="textGeist"
              className="text-zinc-500/60 dark:text-zinc-700/80"
            >
              {t("copyright")}
            </Text>
            <ScrollLink targetId="root">
              <ButtonComponent
                variant="outline"
                className="size-7 p-0 opacity-40"
              >
                <ChevronUp className="size-4" />
              </ButtonComponent>
            </ScrollLink>
          </div>
        </div>
      </footer>
    </FramerProvider>
  );
}
