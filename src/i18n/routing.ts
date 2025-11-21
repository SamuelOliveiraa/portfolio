import { defineRouting } from "next-intl/routing";
import { languages } from "@/constants/language";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: languages,

	// Used when no locale matches
	defaultLocale: "pt",
});
