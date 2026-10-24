import type { Technology } from "./projectTypes";

export type Platform = "Alura" | "Curso em Vídeo";

export type CertificateKind = "formação" | "curso";

export type Certificate = {
  slug: string;

  title: string;

  kind: CertificateKind;

  platform: Platform;

  technologies: Technology[];

  image: string;

  certificateUrl?: string;
};
