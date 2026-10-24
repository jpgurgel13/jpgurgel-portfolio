import type { Certificate } from "../types/certificateTypes";
import ambientesImage from "../assets/certificates/html-css-ambientes-estrutura-tags.webp";
import flexboxImage from "../assets/certificates/html-css-classes-posicionamento-flexbox.webp";
import cabecalhoImage from "../assets/certificates/html-css-cabecalho-footer-variaveis.webp";
import publicacaoImage from "../assets/certificates/html-css-responsividade-publicacao.webp";
import praticandoImage from "../assets/certificates/html-css-praticando.webp";
import mobileFirstImage from "../assets/certificates/html-css-responsividade-mobile-first.webp";
import logicaJavascriptImage from "../assets/certificates/logica-programacao-javascript.webp";
import comecandoImage from "../assets/certificates/comecando-em-programacao.webp";
import funcoesListasImage from "../assets/certificates/logica-programacao-funcoes-listas.webp";
import paginasDinamicasImage from "../assets/certificates/javascript-paginas-dinamicas.webp";
import iaGenerativaImage from "../assets/certificates/ia-generativa.webp";
import engenhariaPromptImage from "../assets/certificates/engenharia-de-prompt.webp";
import chatgptImage from "../assets/certificates/chatgpt-qualidade-resultados.webp";
import pythonMundo1Image from "../assets/certificates/python-mundo-1.webp";
import pythonMundo2Image from "../assets/certificates/python-mundo-2.webp";
import formacaoHtmlCssImage from "../assets/certificates/formacao-html-css-projetos-web.webp";

const ALURA_URL = "https://cursos.alura.com.br/certificate/";

export const certificateList: Certificate[] = [
  {
    slug: "formacao-html-css-projetos-web",
    title: "Formação HTML e CSS para projetos web",
    kind: "formação",
    platform: "Alura",
    technologies: ["HTML", "CSS"],
    image: formacaoHtmlCssImage,
    // formação usa outro endereço (/degree/certificate/), por isso o link vai inteiro
    certificateUrl:
      "https://cursos.alura.com.br/degree/certificate/b51a2ed5-f18f-4302-93cf-2c6be9f7b731",
  },
  {
    slug: "html-css-ambientes-estrutura-tags",
    title:
      "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags",
    kind: "curso",
    platform: "Alura",
    technologies: ["HTML", "CSS"],
    image: ambientesImage,
    certificateUrl: ALURA_URL + "58adbdd5-3e56-4f3b-b795-e8789bc239ce",
  },
  {
    slug: "html-css-classes-posicionamento-flexbox",
    title: "HTML e CSS: classes, posicionamento e Flexbox",
    kind: "curso",
    platform: "Alura",
    technologies: ["HTML", "CSS"],
    image: flexboxImage,
    certificateUrl: ALURA_URL + "8d8aa3d9-601b-4c49-b1fe-7961af66cd5b",
  },
  {
    slug: "html-css-cabecalho-footer-variaveis",
    title: "HTML e CSS: cabeçalho, footer e variáveis CSS",
    kind: "curso",
    platform: "Alura",
    technologies: ["HTML", "CSS"],
    image: cabecalhoImage,
    certificateUrl: ALURA_URL + "c906898d-175f-45b1-885c-817421d49740",
  },
  {
    slug: "html-css-responsividade-publicacao",
    title:
      "HTML e CSS: trabalhando com responsividade e publicação de projetos",
    kind: "curso",
    platform: "Alura",
    technologies: ["HTML", "CSS"],
    image: publicacaoImage,
    certificateUrl: ALURA_URL + "34ceb8da-e684-4955-a8d4-d6ecbb07073d",
  },
  {
    slug: "html-css-praticando",
    title: "HTML e CSS: praticando HTML/CSS",
    kind: "curso",
    platform: "Alura",
    technologies: ["HTML", "CSS"],
    image: praticandoImage,
    certificateUrl: ALURA_URL + "bec819e1-e3e4-4b66-8b4e-7d8370caa2c0",
  },
  {
    slug: "html-css-responsividade-mobile-first",
    title: "HTML e CSS: responsividade com mobile-first",
    kind: "curso",
    platform: "Alura",
    technologies: ["HTML", "CSS"],
    image: mobileFirstImage,
    certificateUrl: ALURA_URL + "b136547e-6c82-4a5f-bb4a-db7496b0576f",
  },
  {
    slug: "logica-programacao-javascript",
    title: "Lógica de programação: mergulhe em programação com JavaScript",
    kind: "curso",
    platform: "Alura",
    technologies: ["JavaScript"],
    image: logicaJavascriptImage,
    certificateUrl: ALURA_URL + "978e5d52-337d-4507-8bea-45947b52c93c",
  },
  {
    slug: "comecando-em-programacao",
    title: "Começando em Programação: carreira e primeiros passos",
    kind: "curso",
    platform: "Alura",
    technologies: [],
    image: comecandoImage,
    certificateUrl: ALURA_URL + "5c502eb7-356d-440c-b412-2c9d2915cca1",
  },
  {
    slug: "logica-programacao-funcoes-listas",
    title: "Lógica de programação: explore funções e listas",
    kind: "curso",
    platform: "Alura",
    technologies: ["JavaScript"],
    image: funcoesListasImage,
    certificateUrl: ALURA_URL + "d46e23a2-d29e-4e9a-ab77-19c42b3a683a",
  },
  {
    slug: "javascript-paginas-dinamicas",
    title: "JavaScript: construindo páginas dinâmicas",
    kind: "curso",
    platform: "Alura",
    technologies: ["JavaScript"],
    image: paginasDinamicasImage,
    certificateUrl: ALURA_URL + "9a3f3099-f565-4a31-9489-518858ac889a",
  },
  {
    slug: "ia-generativa",
    title: "IA: explorando o potencial da inteligência artificial generativa",
    kind: "curso",
    platform: "Alura",
    technologies: [],
    image: iaGenerativaImage,
    certificateUrl: ALURA_URL + "3d3cd100-fb7b-48f9-ba58-e276e0ab7593",
  },
  {
    slug: "engenharia-de-prompt",
    title: "Engenharia de Prompt: criando prompts eficazes para IA Generativa",
    kind: "curso",
    platform: "Alura",
    technologies: [],
    image: engenhariaPromptImage,
    certificateUrl: ALURA_URL + "b7c21447-c149-4410-a1cc-bd548ac24a30",
  },
  {
    slug: "chatgpt-qualidade-resultados",
    title: "ChatGPT: otimizando a qualidade dos resultados",
    kind: "curso",
    platform: "Alura",
    technologies: [],
    image: chatgptImage,
    certificateUrl: ALURA_URL + "78138634-1bec-4c86-98eb-e9503d289ade",
  },
  {
    slug: "python-mundo-1",
    title: "Python 3: Mundo 1",
    kind: "curso",
    platform: "Curso em Vídeo",
    technologies: ["Python"],
    image: pythonMundo1Image,
  },
  {
    slug: "python-mundo-2",
    title: "Python 3: Mundo 2",
    kind: "curso",
    platform: "Curso em Vídeo",
    technologies: ["Python"],
    image: pythonMundo2Image,
  },
];
