import { languages } from "@/constants/language";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages,

  // Used when no locale matches
  defaultLocale: "pt"
});
