import { projectList } from "../data/projectsData";
import {
  currentStep,
  stackList,
  strengthList,
  toolList,
} from "../data/aboutData";
import Mascot from "../components/ui/Mascot";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeading from "../components/ui/SectionHeading";
import TechList from "../components/projects/TechList";
import JourneyStep from "../components/about/JourneyStep";
import spiderCodingImage from "../assets/mascot/aranha-chip-acessorios/4-codando.png";
import spiderPartyImage from "../assets/mascot/aranha-chip-acessorios/6-comemorando.png";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <title>Sobre mim | jpgurgel</title>

      <section className={styles.hero} aria-labelledby="about-title">
        <div className={styles.heroTexts}>
          <p className={styles.label}>{"// sobre mim"}</p>
          <h1 id="about-title" className={styles.title}>
            Oi, eu sou o JP<span className={styles.highlight}>.</span>
          </h1>
          <p className={styles.text}>
            Meu nome é João Pedro, mas pode me chamar de JP. Sou desenvolvedor
            front-end em formação, de Campo Grande (MS), e aprendo do jeito que
            mais funciona para mim: transformando ideias em projetos reais.
          </p>
          <p className={styles.text}>
            Sempre tive interesse pela área de criação, seja no desenvolvimento
            de softwares, interfaces ou pequenos programas. Desde a escola, já
            dizia que queria ser engenheiro de software. Minha jornada na
            programação começou com Python, mas foi ao estudar HTML e CSS que
            descobri minha verdadeira afinidade com o desenvolvimento front-end.
          </p>
          <p className={styles.text}>
            Atualmente, meu foco está na criação de interfaces modernas,
            responsivas e funcionais, utilizando tecnologias como HTML, CSS,
            JavaScript e React. Valorizo a organização, a atenção aos detalhes e
            a melhoria contínua, sempre buscando oferecer uma boa experiência
            para quem utiliza meus projetos.
          </p>
          <p className={styles.text}>
            Além da programação, também tenho interesse e experiência com
            design, algo que procuro incorporar ao meu trabalho. A identidade
            visual deste portfólio e a Aranha-Chip, meu mascote em pixel art que
            você encontrará pelas páginas, nasceram de ideias minhas e
            representam um pouco da criatividade que levo para cada projeto.
          </p>
          <p className={styles.text}>
            Acredito que cada desafio é uma oportunidade de aprender, testar
            conhecimentos e aprimorar minhas habilidades. Por isso, busco
            evoluir constantemente, desenvolvendo projetos cada vez mais
            sólidos, com código limpo, organizado e bem estruturado.
          </p>
          <p className={styles.text}>
            Seja bem-vindo ao meu espaço! Aqui você encontrará meus projetos,
            minha evolução e um pouco da trajetória que estou construindo na
            programação.
          </p>
          <p className={styles.text}>
            E, como já dizia o Homem-Aranha: “Com grandes poderes vêm grandes
            responsabilidades.” No meu caso, isso significa continuar
            aprendendo, evoluindo e escrevendo códigos cada vez melhores.
          </p>
        </div>

        <div className={styles.mascotFrame}>
          <span className={styles.frameName}>chip.png</span>
          <Mascot
            src={spiderCodingImage}
            alt="Aranha-Chip, o mascote do site, de fones de ouvido e cara concentrada"
            width={320}
            height={256}
          />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="journey-title">
        <SectionHeading
          id="journey-title"
          label="trajetória"
          title="Como cheguei até aqui"
        />
        <ol className={styles.journey}>
          {projectList.map((project, index) => (
            <JourneyStep
              key={project.slug}
              step={index + 1}
              data={{
                title: project.title,
                text: project.summary,
                technologies: project.technologies,
                link: `/projects/${project.slug}`,
              }}
            />
          ))}
          <JourneyStep
            step={projectList.length + 1}
            data={currentStep}
            isCurrent
          />
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="strengths-title">
        <SectionHeading
          id="strengths-title"
          label="como eu trabalho"
          title="O que eu levo para cada projeto"
        />
        <ul className={styles.strengthGrid}>
          {strengthList.map((strength) => {
            const Icon = strength.icon;

            return (
              <li key={strength.title} className={styles.strengthCard}>
                <span className={styles.strengthIcon}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className={styles.strengthTitle}>{strength.title}</h3>
                <p className={styles.strengthText}>{strength.text}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="stack-title">
        <SectionHeading
          id="stack-title"
          label="ferramentas"
          title="Com o que eu trabalho"
        />
        <TechList technologies={stackList} />
        <p className={styles.tools}>
          No dia a dia também uso{" "}
          <span className={styles.toolNames}>{toolList.join(", ")}</span>.
        </p>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <Mascot
          src={spiderPartyImage}
          alt="Aranha-Chip comemorando, com chapéu de festa e confetes"
          width={160}
          height={128}
        />
        <div className={styles.ctaTexts}>
          <h2 id="cta-title" className={styles.ctaTitle}>
            Bora construir algo juntos?
          </h2>
          <p className={styles.text}>
            Estou aberto a oportunidades, projetos e boas conversas sobre
            front-end.
          </p>
          <div className={styles.ctaButtons}>
            <ButtonLink to="/contact" variant="primary">
              Fale comigo
            </ButtonLink>
            <ButtonLink to="/projects" variant="secondary">
              Ver projetos
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
