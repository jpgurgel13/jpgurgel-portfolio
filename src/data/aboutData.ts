import { Accessibility, GraduationCap, Palette } from "lucide-react";
import type { JourneyStepData, Strength } from "../types/aboutTypes";
import type { Technology } from "../types/projectTypes";

export const strengthList: Strength[] = [
  {
    title: "Olhar de design",
    text: "Cuido de cores, tipografia e espaçamento para que a interface tenha identidade, e não apenas funcione.",
    icon: Palette,
  },
  {
    title: "Acessibilidade desde o início",
    text: "Foco visível para quem navega pelo teclado, textos alternativos nas imagens e respeito a quem prefere menos animação.",
    icon: Accessibility,
  },
  {
    title: "Aprendizado constante",
    text: "Estudo pela Alura e transformo cada aula em prática. O próximo passo é aprofundar ainda mais a base de JavaScript.",
    icon: GraduationCap,
  },
];

export const currentStep: JourneyStepData = {
  title: "Este portfólio",
  text: "Meu primeiro projeto com React e TypeScript: componentes, rotas, tipagem e deploy na Vercel. Você está navegando nele agora.",
  technologies: ["React", "TypeScript"],
};

export const stackList: Technology[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
];

export const toolList: string[] = [
  "Git",
  "GitHub",
  "VS Code",
  "Vite",
  "Vercel",
];
