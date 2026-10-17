import type { Project } from "../../types/projectTypes";
import styles from "./ProjectCard.module.css";
import TechList from "./TechList";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const cardClassName = project.featured
    ? `${styles.card} ${styles.featured}`
    : styles.card;

  return (
    <article className={cardClassName}>
      {project.alura && (
        <span className={styles.aluraBadge}>Projeto Alura</span>
      )}
      {project.images.length > 0 && (
        <img
          className={styles.projectImage}
          src={project.images[0]}
          alt={`Tela inicial do projeto ${project.title}`}
          loading="lazy"
          width={1280}
          height={720}
        />
      )}
      <div className={styles.texts}>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <TechList technologies={project.technologies} />
        <div className={styles.linksContainer}>
          {project.liveUrl && (
            <a
              className={styles.liveLink}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver online
            </a>
          )}
          {project.repoUrl && (
            <a
              className={styles.repoLink}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
