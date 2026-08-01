"use client";

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
    <div
      className="flex items-center cursor-pointer"
      role="group"
      aria-label="Selecionar idioma"
    >
      <button
        aria-pressed={locale === "pt"}
        aria-label="Mudar para Português"
        className={twMerge(
          "border cursor-pointer p-2 rounded-tl-sm rounded-bl-sm flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-black",
          locale === "pt" ? "bg-emerald-900 text-white" : ""
        )}
        onClick={() => handleLanguageChange("pt")}
      >
        PT
      </button>

      <button
        aria-pressed={locale === "en"}
        aria-label="Switch to English"
        className={twMerge(
          "border cursor-pointer p-2 rounded-tr-sm rounded-br-sm flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-black focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-black",
          locale === "en" ? "bg-emerald-900 text-white" : ""
        )}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </button>
    </div>
  );
}
