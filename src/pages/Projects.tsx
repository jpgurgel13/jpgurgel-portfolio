import { projectList } from "../data/projectsData";
import ProjectCard from "../components/projects/ProjectCard";
import styles from "./Projects.module.css";
function Projects() {
  return (
    <section className={styles.container}>
      <title>Projetos | jpgurgel</title>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.grid}>
        {projectList.map((item) => (
          <ProjectCard key={item.slug} project={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
