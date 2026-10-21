import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { projectList } from "../data/projectsData";
import styles from "./Home.module.css";
import CodeCard from "../components/home/CodeCard";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/projects/ProjectCard";

// Os 3 últimos projetos da lista, do mais novo para o mais antigo
const recentProjects = projectList.slice(-3).reverse();

function Home() {
  return (
    <div className={styles.page}>
      <title>jpgurgel | Dev. Front-end</title>

      <section className={styles.container}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Tecendo a web<span className={styles.cursor}>_</span>
          </h1>
          <p className={styles.text}>
            Sou o JP, desenvolvedor front-end em formação, criando projetos com
            HTML, CSS, JavaScript e React enquanto evoluo na prática.
          </p>
          <div className={styles.buttonContainer}>
            <ButtonLink to="/projects" variant="primary">
              Ver projetos
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Fale comigo!
            </ButtonLink>
          </div>
        </div>
        <CodeCard />
      </section>

      <section className={styles.recent} aria-labelledby="recent-title">
        <div className={styles.recentHeader}>
          <SectionHeading
            id="recent-title"
            label="projetos"
            title="Projetos recentes"
          />
          <Link to="/projects" className={styles.seeAll}>
            Ver todos
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.grid}>
          {recentProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
