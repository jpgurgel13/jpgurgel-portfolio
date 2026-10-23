import { useEffect, useState } from "react";
import { themeOptionList } from "../../data/themeData";
import type { Theme } from "../../types/themeTypes";
import styles from "./ThemeToggle.module.css";

// A mesma chave é usada no script do index.html. Se mudar aqui, mude lá também.
const STORAGE_KEY = "jpgurgel-theme";

function getSavedTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const savedOption = themeOptionList.find(
      (option) => option.value === savedTheme,
    );

    return savedOption ? savedOption.value : "dark";
  } catch {
    return "dark";
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Navegador com armazenamento bloqueado: o tema só vale nesta visita.
    }
  }, [theme]);

  return (
    <div className={styles.group} role="group" aria-label="Escolher tema">
      {themeOptionList.map((option) => {
        const Icon = option.icon;
        const isActive = option.value === theme;
        const buttonClassName = isActive
          ? `${styles.button} ${styles.active}`
          : styles.button;

        return (
          <button
            key={option.value}
            type="button"
            className={buttonClassName}
            onClick={() => setTheme(option.value)}
            aria-pressed={isActive}
            aria-label={option.label}
            title={option.label}
          >
            <Icon size={16} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;
