import { useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export type Theme = "dark" | "light";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const isDark = theme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  const buttonLabel = isDark
    ? "Mudar para tema claro"
    : "Mudar para tema escuro";
  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={buttonLabel}
    >
      {isDark ? (
        <Sun size={16} aria-hidden="true" />
      ) : (
        <Moon size={16} aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;
