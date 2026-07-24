"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group border size-8 flex items-center justify-center rounded-md cursor-pointer"
      aria-label="Alternar tema"
    >
      <Sun className="size-4 hidden dark:block group-hover:scale-120 group-hover:animate-sun-spin transition-all duration-200" />

      <Moon className="size-4 block dark:hidden group-hover:scale-120 group-hover:animate-moon-wobble transition-all duration-200" />
    </button>
  );
}
