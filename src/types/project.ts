export type Technology = "HTML" | "CSS" | "JavaScript" | "TypeScript" | "React";

export type Project = {
  slug: string;

  title: string;

  summary: string | null;

  technologies: Technology[];

  images: string[];

  liveUrl?: string;

  repoUrl?: string;

  featured: boolean;
};
