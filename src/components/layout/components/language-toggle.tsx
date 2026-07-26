"use client";

import { Text } from "@/components/common";
import { twMerge } from "tailwind-merge";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex items-center cursor-pointer">
      <Text
        className={twMerge(
          "border p-2 rounded-tl-sm rounded-bl-sm flex items-center justify-center transition-all duration-200",
          locale === "pt" ? "bg-emerald-900 text-white" : ""
        )}
        onClick={() => handleLanguageChange("pt")}
      >
        PT
      </Text>
      <Text
        className={twMerge(
          "border p-2 rounded-tr-sm rounded-br-sm flex items-center justify-center transition-all duration-200",
          locale === "en" ? "bg-emerald-900 text-white" : ""
        )}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </Text>
    </div>
  );
}
