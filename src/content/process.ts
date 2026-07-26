"use client";

import { ClipboardList, PenSquare, Terminal, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export function useProcessItems() {
  const t = useTranslations("Process");

  return [
    { number: "01", title: t("items.alignment.title"), description: t("items.alignment.description"), Icon: ClipboardList },
    { number: "02", title: t("items.design.title"), description: t("items.design.description"), Icon: PenSquare },
    { number: "03", title: t("items.development.title"), description: t("items.development.description"), Icon: Terminal },
    { number: "04", title: t("items.delivery.title"), description: t("items.delivery.description"), Icon: Rocket }
  ];
}
