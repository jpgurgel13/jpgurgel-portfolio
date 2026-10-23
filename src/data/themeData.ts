import { CodeXml, Moon, Sun } from "lucide-react";
import type { ThemeOption } from "../types/themeTypes";

export const themeOptionList: ThemeOption[] = [
  { value: "light", label: "Tema claro", icon: Sun },
  { value: "dark", label: "Tema escuro", icon: Moon },
  { value: "editor", label: "Tema do editor", icon: CodeXml },
];
