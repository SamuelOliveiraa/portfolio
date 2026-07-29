"use client";

import { Code2, Globe, Layers, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";

export function useServicesItems() {
  const t = useTranslations("Services");

  return [
    {
      icon: Layers,
      title: t("items.card1.title"),
      description: t("items.card1.description")
    },
    {
      icon: Globe,
      title: t("items.card2.title"),
      description: t("items.card2.description")
    },
    {
      icon: Code2,
      title: t("items.card3.title"),
      description: t("items.card3.description")
    },
    {
      icon: Wrench,
      title: t("items.card4.title"),
      description: t("items.card4.description")
    }
  ];
}
