export type Technology =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Python";
export type Challenge = {
  problem: string;
  solution: string;
};

export type Project = {
  slug: string;

  title: string;

  summary: string | null;

  description?: string[];

  technologies: Technology[];

  images: string[];

  challenges?: Challenge[];

  liveUrl?: string;

  repoUrl?: string;

  featured: boolean;

  alura: boolean;
};
