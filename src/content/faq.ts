"use client";

import { useTranslations } from "next-intl";

type FaqItem = { trigger: string; content: string };

export function useFaqItems() {
  const t = useTranslations("Faq");
  const items = t.raw("items") as FaqItem[];

  return items.map((item, index) => ({ ...item, value: `item-${index + 1}` }));
}
