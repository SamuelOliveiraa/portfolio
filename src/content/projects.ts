"use client";

import { useTranslations } from "next-intl";

interface ProjectItem {
  title: string;
  description: string;
  techs: string[];
  src: string;
  link: string;
  link2: string;
}

export function useProjectsItems(): ProjectItem[] {
  const t = useTranslations("Projects");

  return [
    {
      title: t("items.card1.title"),
      description: t("items.card1.description"),
      techs: t.raw("items.card1.techs") as string[],
      src: t("items.card1.src"),
      link: t("items.card1.link"),
      link2: t("items.card1.link2")
    }
    // {
    //   title: t("items.card2.title"),
    //   description: t("items.card2.description"),
    //   techs: t.raw("items.card2.techs") as string[],
    //   src: t("items.card2.src"),
    //   link: t("items.card2.link"),
    //   link2: t("items.card1.link2")
    // }
  ];
}
