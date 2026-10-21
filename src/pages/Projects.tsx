import { projectList } from "../data/projectsData";
import ProjectCard from "../components/projects/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.container}>
      <title>Projetos | jpgurgel</title>
      <div className={styles.intro}>
        <h1 className={styles.title}>Projetos</h1>
        <p className={styles.text}>
          Do meu primeiro site em HTML e CSS até os projetos com JavaScript:
          clique no título de um card para ver os detalhes e os desafios de cada
          um.
        </p>
      </div>
      <div className={styles.grid}>
        {projectList.map((item) => (
          <ProjectCard key={item.slug} project={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
