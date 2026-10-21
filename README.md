# jpgurgel · portfólio

Portfólio pessoal do **JP (João Pedro)**, desenvolvedor front-end em formação.

🔗 **No ar:** https://jpgurgel-portfolio.vercel.app/

## Sobre o projeto

Este é o meu primeiro projeto com React e TypeScript. Ele reúne os projetos que construí enquanto estudo front-end, a minha trajetória e os meus canais de contato. A identidade visual, o logo e a Aranha-Chip (o mascote em pixel art) fazem parte do projeto.

## Páginas

| Rota              | O que tem                                             |
| ----------------- | ----------------------------------------------------- |
| `/`               | Apresentação e projetos recentes                      |
| `/projects`       | Todos os projetos em cards                            |
| `/projects/:slug` | Detalhes de um projeto: descrição, galeria e desafios |
| `/about`          | Sobre mim, trajetória e ferramentas                   |
| `/contact`        | WhatsApp, Instagram e GitHub                          |
| qualquer outra    | Página 404 com o mascote                              |

## Tecnologias

- React 19 + TypeScript
- Vite
- React Router
- CSS Modules com design tokens (variáveis CSS)
- Lucide (ícones)
- Deploy na Vercel

## O que pratiquei aqui

- Componentes reutilizáveis com props tipadas (`ProjectCard`, `TechList`, `ProjectLinks`, `Mascot`, `ButtonLink`)
- Dados separados da interface (`src/data`) com tipos próprios (`src/types`)
- Rotas dinâmicas com `useParams` e página 404
- Layout responsivo com Grid e Flexbox
- Acessibilidade: foco visível, textos alternativos e `prefers-reduced-motion`
- Performance: imagens em WebP e `loading="lazy"`

## Rodando na sua máquina

```bash
git clone https://github.com/jpgurgel13/jpgurgel-portfolio.git
cd jpgurgel-portfolio
npm install
npm run dev
```

## Estrutura

```
src/
├── assets/       # logo, mascote e prints dos projetos
├── components/   # peças reutilizáveis (layout, projetos, sobre, contato, ui)
├── data/         # conteúdo do site (projetos, contatos, navegação)
├── layouts/      # moldura com topo, conteúdo e rodapé
├── pages/        # uma página por rota
├── styles/       # tokens e estilos globais
└── types/        # moldes (tipos) dos dados
```
