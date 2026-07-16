"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border cursor-pointer"
    >
      Alternar para o modo {theme === "dark" ? "Claro" : "Escuro"}
    </button>
  );
}
