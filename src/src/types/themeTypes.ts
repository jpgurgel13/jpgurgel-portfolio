import type { LucideIcon } from "lucide-react";

export type Theme = "dark" | "light" | "editor";

export type ThemeOption = {
  value: Theme;
  label: string;
  icon: LucideIcon;
};
