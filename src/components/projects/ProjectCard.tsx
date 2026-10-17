import type { Project } from "../../types/projectTypes";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {project.images.length > 0 && (
        <img
          className={styles.projectImage}
          src={project.images[0]}
          alt={`Tela inicial do projeto ${project.title}`}
        />
      )}
      <div className={styles.texts}>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <ul>
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className={styles.linksContainer}>
          {project.liveUrl && (
            <a
              className={styles.links}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver online
            </a>
          )}
          {project.repoUrl && (
            <a
              className={styles.links}
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
