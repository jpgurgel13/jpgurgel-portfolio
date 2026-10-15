import { projects } from "../data/projects";
function Projects() {
  return (
    <>
      <h1>Projetos</h1>
      <ul>
        {projects.map((itempj) => (
          <li key={itempj.slug}>{itempj.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Projects;
