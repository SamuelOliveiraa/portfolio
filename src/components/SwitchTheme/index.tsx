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
		<button
			type="button"
			className="mb-4 sm:mb-0 transition-all duration-300 rounded-md ease-in-out flex justify-between sm:justify-center items-center hover:bg-gray-100 p-2 hover:cursor-pointer"
			onClick={toggleTheme}
		>
			<span className="block sm:hidden">{t("switchTheme")}</span>
			{theme === "light" ? (
				<MoonStar className="text-gray-600 " />
			) : (
				<Sun className="text-gray-600 " />
			)}
		</button>
	);
}
