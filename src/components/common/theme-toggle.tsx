"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group border cursor-pointer p-2 rounded-md size-9 flex items-center justify-center opacity-80 hover:opacity-100 hover:shadow-sm dark:hover:border-white/50 transition-all duration-200"
    >
      {theme === "dark" ? (
        <Sun className="size-5 group-hover:scale-120 group-hover:animate-sun-spin transition-all duration-200" />
      ) : (
        <Moon className="size-5 group-hover:scale-120 group-hover:animate-moon-wobble transition-all duration-200" />
      )}
    </button>
  );
}
