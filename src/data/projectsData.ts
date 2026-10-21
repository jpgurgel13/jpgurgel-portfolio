import type { Project } from "../types/projectTypes";
import padariaImagem from "../assets/projects/primeiro-projeto-padaria.webp";
import jogoImagem from "../assets/projects/jogo-numero-secreto.webp";
import colmeiaImagem from "../assets/projects/colmeia-da-sofia.webp";
import listaComprasImagem from "../assets/projects/lista-de-compras.webp";

export const projectList: Project[] = [
  {
    slug: "primeiro-projeto-padaria",
    title: "Primeiro Projeto: Padaria",
    summary:
      "Meu primeiro projeto: o site de uma padaria fictícia, com cardápio e preços. É simples, mas deixei no portfólio para mostrar de onde comecei.",
    description: [
      "Este foi meu primeiro projeto de desenvolvimento front-end: a criação de um site para uma padaria fictícia chamada L'Artisan JP. A proposta foi desenvolver uma página que apresentasse a identidade do estabelecimento, transmitisse a ideia de tradição e permitisse que os visitantes conhecessem seus produtos.",
      "O site conta com uma página inicial de apresentação, uma seção sobre a história fictícia da padaria e um cardápio com imagens e preços de diferentes produtos, como pães, croissants e brioche. Para construir a interface, trabalhei com HTML para estruturar o conteúdo e CSS para definir o visual, incluindo cores, tipografia, espaçamentos, imagens e organização dos elementos.",
      "Também pratiquei a criação de páginas separadas e a navegação entre elas por meio de links, além de utilizar Flexbox, variáveis CSS e media queries para adaptar o layout a diferentes tamanhos de tela.",
      "Apesar de ser um projeto inicial e predominantemente estático, ele representa meu primeiro contato prático com a construção de interfaces web e marca o começo da minha jornada no desenvolvimento front-end. Mantive esse projeto no portfólio para registrar minha evolução desde os primeiros passos.",
    ],
    technologies: ["HTML", "CSS"],
    images: [padariaImagem],
    liveUrl: "https://portifolio-padaria-v1.vercel.app/",
    repoUrl: "https://github.com/jpgurgel13/Portifolio-padaria-v1",
    featured: false,
    alura: false,
    challenges: [
      {
        problem:
          "Como tudo era novidade, passei horas tentando acertar o display: flex. Demorei cerca de 6 horas para terminar uma parte que hoje faço em menos de 30 minutos.",
        solution:
          "Pesquisei como usar o Flexbox em materiais on-line, como o W3Schools, e fui testando até entender como ele funcionava.",
      },
    ],
  },
  {
    slug: "jogo-numero-secreto",
    title: "Jogo do Número Secreto",
    summary:
      "Meu primeiro projeto com JavaScript: um jogo de adivinhar o número secreto. Foi onde aprendi variáveis e condicionais (if/else).",
    description: [
      "Projeto desenvolvido como atividade prática durante meus estudos na Alura, com o objetivo de aprender e praticar os fundamentos do JavaScript.",
      "O jogo desafia o usuário a descobrir um número secreto gerado aleatoriamente entre 1 e 10. A cada tentativa, o sistema informa se o número escolhido é maior ou menor que o número secreto, ajudando o jogador a chegar à resposta correta.",
      "Durante o desenvolvimento, pratiquei conceitos como variáveis, funções, estruturas condicionais, geração de números aleatórios e manipulação do DOM para atualizar as informações exibidas na página. O projeto também utiliza a biblioteca ResponsiveVoice para reproduzir instruções por áudio.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [jogoImagem],
    liveUrl: "https://jpgurgel13.github.io/Jogo-Numero-Secreto/",
    repoUrl: "https://github.com/jpgurgel13/Jogo-Numero-Secreto",
    featured: false,
    alura: true,
    challenges: [
      {
        problem:
          "Entender como o JavaScript interage com o HTML e como dividir o código em módulos.",
        solution:
          "Reassisti às aulas três vezes, organizei as funções em arquivos separados e corrigi a referência da variável.",
      },
      {
        problem:
          "Aprender a lógica do JavaScript, especialmente variáveis, funções e condicionais (if/else), para comparar o palpite com o número secreto e dar dicas ao jogador.",
        solution:
          "Usei estruturas condicionais para verificar o palpite e atualizar as mensagens da página.",
      },
    ],
  },
  {
    slug: "lista-de-compras",
    title: "Lista de Compras",
    summary:
      "Meu segundo projeto com JavaScript: uma lista de compras para adicionar, remover e marcar itens como concluídos. Pratiquei manipulação do DOM e eventos de input.",
    description: [
      "Projeto desenvolvido como atividade prática durante meus estudos na Alura, com foco na manipulação de elementos HTML por meio do JavaScript e na organização do código em módulos.",
      "A aplicação permite adicionar produtos a uma lista de compras e marcar os itens conforme são concluídos. A interface é atualizada dinamicamente, sem a necessidade de recarregar a página, proporcionando uma experiência simples e intuitiva.",
      "Durante o desenvolvimento, pratiquei a captura de eventos, a criação dinâmica de elementos HTML, a manipulação do DOM e a divisão do código em módulos JavaScript, separando responsabilidades para facilitar a organização e a manutenção do projeto.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [listaComprasImagem],
    liveUrl: "https://jpgurgel13.github.io/ListaDeComprasAlura/",
    repoUrl: "https://github.com/jpgurgel13/ListaDeComprasAlura",
    featured: false,
    alura: true,
  },
  {
    slug: "colmeia-da-sofia",
    title: "Colmeia da Sofia",
    summary:
      "Feito especialmente para a minha filha: um jogo de apertar botões que tocam sons. Aprendi a criar funções reutilizáveis (DRY), a usar dataset com um objeto como dicionário e a aplicar mobile-first.",
    description: [
      "A Colmeia da Sofia é um projeto pessoal desenvolvido especialmente para minha filha, com a proposta de transformar o aprendizado inicial em uma experiência interativa, visual e acessível. A ideia é criar um ambiente infantil no qual ela possa explorar conteúdos básicos de maneira intuitiva, utilizando botões grandes, ilustrações e estímulos sonoros.",
      "A aplicação conta com atividades de aprendizagem, incluindo animais e cores. Na atividade de animais, cada opção é representada por uma ilustração e identificada por meio de interações; na atividade de cores, os botões permitem explorar diferentes tonalidades e seus nomes. O projeto utiliza atributos data-* no HTML para associar os elementos às informações correspondentes, facilitando a organização dos dados e a reutilização da lógica em JavaScript.",
      "Durante o desenvolvimento, pratiquei a criação de funções reutilizáveis seguindo o princípio DRY (Don't Repeat Yourself), a manipulação do DOM, o uso de objetos como estruturas de consulta e a organização do código em arquivos separados. Também priorizei uma abordagem mobile-first, pensando no uso em dispositivos móveis e em uma interface simples de compreender e utilizar.",
      "Além do aprendizado técnico, esse projeto tem um significado pessoal: ele surgiu de uma necessidade real e me permite aplicar os conhecimentos de front-end na criação de uma experiência pensada para uma pessoa específica. A Colmeia da Sofia une prática de programação, acessibilidade e criatividade em um projeto que pretendo continuar aprimorando conforme avanço nos estudos.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    images: [colmeiaImagem],
    liveUrl: "https://colmeia-da-sofia.vercel.app/",
    repoUrl: "https://github.com/jpgurgel13/Colmeia-da-Sofia",
    featured: true,
    alura: false,
  },
];
