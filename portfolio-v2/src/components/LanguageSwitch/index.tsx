"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const t = useTranslations("SwitchLanguage");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="p-2 flex items-center hover:bg-gray-100 rounded-md transition-all duration-200"
        aria-label="Mudar linguagem | Change Language"
        title="Mudar linguagem | Change Language"
      >
        <Languages className="text-gray-800" size={26} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-100 dark:bg-gray-800">
        <DropdownMenuLabel>{t("title")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link
          href={pathname}
          locale="pt"
          aria-label="Mudar para o idioma portugues | Change to portuguese language"
        >
          <DropdownMenuItem>{t("portuguese")}</DropdownMenuItem>
        </Link>
        <Link
          href={pathname}
          locale="en"
          aria-label="Mudar para o idioma inglês | Change to english language"
        >
          <DropdownMenuItem>{t("english")}</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
