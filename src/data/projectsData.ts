import type { Project } from "../types/projectTypes";
import padariaImagem from "../assets/projects/primeiro-projeto-padaria.webp";
import jogoImagem from "../assets/projects/jogo-numero-secreto.webp";
import colmeiaImagem from "../assets/projects/colmeia-da-sofia.webp";
import listaComprasImagem from "../assets/projects/lista-de-compras.webp";
import kinesisImagem from "../assets/projects/kinesis-lab.webp";
import kinesisImagemSeg from "../assets/projects/kinesis-lab-demo.webp";

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
  {
    slug: "kinesis-lab",
    title: "Kinesis Lab",
    summary:
      "O Kinesis Lab é uma experiência interativa que transforma movimentos das mãos em partículas luminosas em tempo real. Desenvolvido com React, TypeScript, Canvas 2D e MediaPipe, o projeto explora a união entre desenvolvimento web, visão computacional e simulação visual.",
    description: [
      "O Kinesis Lab é um laboratório visual interativo criado para explorar novas possibilidades de interação no navegador. O projeto utiliza a câmera do dispositivo e o reconhecimento de mãos por meio do MediaPipe para transformar gestos e movimentos em uma simulação dinâmica de partículas luminosas.",

      "A experiência combina efeitos de atração e repulsão, mudanças de cores e acúmulo de energia, criando uma interface que reage aos movimentos do usuário. Também conta com um modo de demonstração que permite explorar a experiência sem precisar ativar a câmera.",

      "Desenvolvido com React, TypeScript, Vite e Canvas 2D, o Kinesis Lab nasceu como um experimento criativo que conduzi com **amplo apoio do Claude (IA)**, responsável por grande parte da implementação do código. Minha participação esteve principalmente na concepção da ideia, na definição da experiência visual e das interações desejadas e na orientação do desenvolvimento. O projeto representa uma oportunidade de explorar tecnologias além do meu nível atual de domínio e aprender, na prática, sobre desenvolvimento web, animação e visão computacional..",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Canvas2D",
      "Claude-AI",
    ],
    images: [kinesisImagem, kinesisImagemSeg],
    liveUrl: "https://kinesis-lab-three.vercel.app",
    repoUrl: "https://github.com/jpgurgel13/kinesis-lab.git",
    featured: true,
    alura: false,
    challenges: [
      {
        problem: "Animar milhares de partículas a 60 FPS sem travar a página.",
        solution:
          "Mantive a simulação fora do React, num laço com requestAnimationFrame e Canvas 2D. O React só é avisado quando algo visível muda, como a pose do mascote, em vez de 60 vezes por segundo.",
      },
      {
        problem:
          "Com o campo de correntes, as partículas se juntavam em poucos pontos e o efeito ficava feio.",
        solution:
          "Criei um ciclo de vida. Cada partícula nasce, vive um tempo sorteado e renasce em outro lugar, com um fade suave, o que mantém o enxame sempre distribuído.",
      },
      {
        problem:
          "O rastreamento da mão levava cerca de 30 ms por quadro, mais que o tempo inteiro de um quadro a 60 FPS, e a animação caía para 40 FPS.",
        solution:
          "Levei o MediaPipe para um Web Worker, uma segunda linha de execução. A animação voltou a 60 FPS enquanto a IA trabalha em paralelo.",
      },
      {
        problem:
          "Em alguns computadores, a detecção pela GPU dentro do worker travava e nunca respondia.",
        solution:
          "Implementei um plano B automático: se um quadro fica mais de 2 segundos sem resposta, o worker é reiniciado usando a CPU, e a experiência continua sem a pessoa perceber.",
      },
      {
        problem:
          "A mão era detectada só de 12 a 20 vezes por segundo, então o movimento aparecia aos saltos.",
        solution:
          "Entre uma detecção e outra, a posição desliza suavemente até o ponto detectado. Também ignoro perdas de detecção curtas, para evitar explosões acidentais.",
      },
      {
        problem:
          "Criar uma regra confiável de mão aberta ou fechada, que funcionasse com a mão perto, longe ou inclinada.",
        solution:
          "Uso os pontos 3D do MediaPipe e meço a distância das pontas dos dedos até o pulso, dividida pelo tamanho da palma. Duas faixas de limite (histerese) evitam que o estado fique piscando.",
      },
      {
        problem:
          "Fazer as partículas contornarem os dedos e a palma, e não apenas um ponto no centro da mão.",
        solution:
          "Transformei os 21 pontos da mão em ossos com espessura (cápsulas). Para não pesar, cada partícula faz primeiro um teste rápido de retângulo, e só as que estão perto passam pelo cálculo completo.",
      },
      {
        problem:
          "O rastreamento ficou lento e havia muitas causas possíveis para investigar.",
        solution:
          "Criei uma medição no modo de desenvolvimento (detecções por segundo, tempo de ida e volta e tempo da IA) e testei uma variável por vez. Assim descobri que o gargalo era o modelo, e não a quantidade de partículas.",
      },
      {
        problem:
          "Uma experiência baseada em movimento e luz não podia excluir ninguém.",
        solution:
          "Respeito a preferência do sistema por movimento reduzido, permito usar o modo demonstração pelo teclado e envio avisos para leitores de tela, como 'Mão detectada' e 'Carregando: 50%'.",
      },
    ],
  },
];
