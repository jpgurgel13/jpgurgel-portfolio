import { useParams } from "react-router";
import { projectList } from "../data/projectsData";
import NotFound from "./NotFound";
import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projectList.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <title>{`${project.title} | jpgurgel`}</title>
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <p className={styles.projectDescrition}>{project.summary}</p>
    </>
  );
}
export default ProjectDetails;
