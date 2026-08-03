"use client";

import { useTranslations } from "next-intl";

interface ProjectItem {
  title: string;
  description: string;
  techs: string[];
  src: string;
  link: string;
}

export function useProjectsItems(): ProjectItem[] {
  const t = useTranslations("Projects");

  return [
    {
      title: t("items.card1.title"),
      description: t("items.card1.description"),
      techs: t.raw("items.card1.techs") as string[],
      src: t("items.card1.src"),
      link: t("items.card1.link")
    },
    {
      title: t("items.card2.title"),
      description: t("items.card2.description"),
      techs: t.raw("items.card2.techs") as string[],
      src: t("items.card2.src"),
      link: t("items.card2.link")
    },
    {
      title: t("items.card3.title"),
      description: t("items.card3.description"),
      techs: t.raw("items.card3.techs") as string[],
      src: t("items.card3.src"),
      link: t("items.card3.link")
    }
  ];
}
