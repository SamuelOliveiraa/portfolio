"use client";

import { Code2, Globe, Layers, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export function useServicesItems() {
  const t = useTranslations("Services");

  return [
    { icon: Layers, title: t("items.saas.title"), description: t("items.saas.description") },
    { icon: Globe, title: t("items.landing.title"), description: t("items.landing.description") },
    { icon: Code2, title: t("items.api.title"), description: t("items.api.description") },
    { icon: Zap, title: t("items.performance.title"), description: t("items.performance.description") }
  ];
}
