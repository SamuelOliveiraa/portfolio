"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Text from "./text";
import { useTranslations } from "next-intl";

export default function BackLink() {
  const t = useTranslations("Common");
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 transition-colors mb-10 group"
    >
      <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
      <Text size="textSmall" className="font-semibold">
        {t("backHome")}
      </Text>
    </Link>
  );
}
