import { Link, useParams } from "react-router";
import { projectList } from "../data/projectsData";
import NotFound from "./NotFound";
import styles from "./ProjectDetails.module.css";
import TechList from "../components/projects/TechList";
import ProjectLinks from "../components/projects/ProjectLinks";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projectList.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className={styles.container}>
      <title>{`${project.title} | jpgurgel`}</title>

      <Link to="/projects" className={styles.backLink}>
        ← Voltar para projetos
      </Link>

      <header className={styles.header}>
        {project.alura && (
          <span className={styles.aluraBadge}>Projeto Alura</span>
        )}
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <TechList technologies={project.technologies} />
      </header>

      {project.images.length > 0 && (
        <div className={styles.gallery}>
          {project.images.map((image, index) => (
            <img
              key={image}
              className={styles.galleryImage}
              src={image}
              alt={`Tela ${index + 1} do projeto ${project.title}`}
              width={1280}
              height={720}
            />
          ))}
        </div>
      )}

      {project.description && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre o projeto</h2>
          {project.description.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {project.challenges && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Desafios</h2>
          {project.challenges.map((challenge) => (
            <div key={challenge.problem} className={styles.challenge}>
              <h3 className={styles.challengeTitle}>Problema</h3>
              <p className={styles.paragraph}>{challenge.problem}</p>
              <h3 className={styles.challengeTitle}>Como resolvi</h3>
              <p className={styles.paragraph}>{challenge.solution}</p>
            </div>
          ))}
        </section>
      )}

      <ProjectLinks liveUrl={project.liveUrl} repoUrl={project.repoUrl} />
    </article>
  );
}

export default ProjectDetails;
