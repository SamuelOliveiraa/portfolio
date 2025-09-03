"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import useTheme from "next-theme";

export default function SwitchTheme() {
  const t = useTranslations("Header");

  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div
      className="mb-4 sm:mb-0 transition-all duration-300 rounded-md ease-in-out flex justify-between sm:justify-center items-center"
      onClick={toggleTheme}
    >
      <span className="block sm:hidden">{t("switchTheme")}</span>
      {theme === "light" ? (
        <MoonStar className="text-gray-600" />
      ) : (
        <Sun className="text-gray-600" />
      )}
    </div>
  );
}
