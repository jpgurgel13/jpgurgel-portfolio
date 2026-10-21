import type { LucideIcon } from "lucide-react";
import type { Technology } from "./projectTypes";

export type Strength = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type JourneyStepData = {
  title: string;
  text: string | null;
  technologies: Technology[];
  link?: string;
};
