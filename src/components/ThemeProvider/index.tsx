"use client";

import { ThemeProvider as NextThemeProvider } from "next-theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemeProvider attribute="class" defaultTheme="dark">
			{children}
		</NextThemeProvider>
	);
}
