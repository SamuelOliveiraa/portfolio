import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

const config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class", // habilita dark mode via classe
	theme: {
		extend: {
			colors: {
				gray: {
					DEFAULT: "var(--color-DEFAULT)",
					50: "var(--color-gray-50)",
					100: "var(--color-gray-100)",
					200: "var(--color-gray-200)",
					300: "var(--color-gray-300)",
					400: "var(--color-gray-400)",
					500: "var(--color-gray-500)",
					600: "var(--color-gray-600)",
					700: "var(--color-gray-700)",
					800: "var(--color-gray-800)",
					900: "var(--color-gray-900)",
					950: "var(--color-gray-950)",
				},
				green: {
					500: "#10b981",
				},
			},

			fontFamily: {
				sans: ["Inter", ...fontFamily.sans],
			},
		},
	},
	plugins: ["tailwindcss-animate"],
};

export default config;
