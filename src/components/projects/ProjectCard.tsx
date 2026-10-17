import type { Project } from "../../types/projectTypes";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Ver online
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="blank" rel="noopener noreferrer">
            Ver código
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
