import { projectList } from "../data/projectsData";
import ProjectCard from "../components/projects/ProjectCard";

function Projects() {
  return (
    <>
      <h1>Projetos</h1>
      <div>
        {projectList.map((item) => (
          <ProjectCard key={item.slug} project={item} />
        ))}
      </div>
    </>
  );
}

export default Projects;
