"use client";

import { useTranslations } from "next-intl";

export function useTypingText() {
  const t = useTranslations("Hero");
  return t.raw("typing") as string[];
}
