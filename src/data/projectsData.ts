import type { Project } from "../types/projectTypes";
import padariaImagem from "../assets/projects/primeiro-projeto-padaria.webp";
import jogoImagem from "../assets/projects/jogo-numero-secreto.webp";
import colmeiaImagem from "../assets/projects/colmeia-da-sofia.webp";
import listaComprasImagem from "../assets/projects/lista-de-compras.webp";

export const projectList: Project[] = [
  {
    slug: "primeiro-projeto-padaria",
    title: "Primeiro Projeto - Padaria",
    summary:
      "Meu primeiro projeto: o site de uma padaria fictícia, com cardápio e preços. É simples, mas deixei no portfólio para mostrar de onde comecei.",
    technologies: ["HTML", "CSS"],
    images: [padariaImagem],
    liveUrl: "https://portifolio-padaria-v1.vercel.app/",
    repoUrl: "https://github.com/jpgurgel13/Portifolio-padaria-v1",
    featured: false,
  },
  {
    slug: "jogo-numero-secreto",
    title: "Jogo do Número Secreto",
    summary:
      "Meu primeiro projeto com JavaScript: um jogo de adivinhar o número secreto. Foi onde aprendi variáveis e condicionais (if/else).",

    technologies: ["HTML", "CSS", "JavaScript"],
    images: [jogoImagem],
    liveUrl: "https://jpgurgel13.github.io/Jogo-Numero-Secreto/",
    repoUrl: "https://github.com/jpgurgel13/Jogo-Numero-Secreto",
    featured: false,
  },
  {
    slug: "lista-de-compras",
    title: "Lista de Compras",
    summary:
      "Meu segundo projeto com JavaScript: uma lista de compras para adicionar e remover itens. Pratiquei manipulação do DOM e eventos de input.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [listaComprasImagem],
    liveUrl: "https://jpgurgel13.github.io/ListaDeComprasAlura/",
    repoUrl: "https://github.com/jpgurgel13/ListaDeComprasAlura",
    featured: false,
  },
  {
    slug: "colmeia-da-sofia",
    title: "Colmeia da Sofia",
    summary:
      "Feito especialmente para a minha filha: um jogo de apertar botões que tocam sons. Aprendi funções reutilizáveis (DRY), dataset com objeto como dicionário e mobile first.",
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [colmeiaImagem],
    liveUrl: "https://colmeia-da-sofia.vercel.app/",
    repoUrl: "https://github.com/jpgurgel13/Colmeia-da-Sofia",
    featured: true,
  },
];
