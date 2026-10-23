import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export type Theme = "dark" | "light";

// A mesma chave é usada no script do index.html. Se mudar aqui, mude lá também.
const STORAGE_KEY = "jpgurgel-theme";

function getSavedTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    return savedTheme === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  const isDark = theme === "dark";
  const nextTheme: Theme = isDark ? "light" : "dark";
  const buttonLabel = isDark
    ? "Mudar para tema claro"
    : "Mudar para tema escuro";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Navegador com armazenamento bloqueado: o tema só vale nesta visita.
    }
  }, [theme]);

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => setTheme(nextTheme)}
      aria-label={buttonLabel}
    >
      {isDark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;
