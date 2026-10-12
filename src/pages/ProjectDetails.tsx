import { useParams } from "react-router";
function ProjectsDetails() {
  const { slug } = useParams();

  return <p>Detalhes do projeto: {slug}</p>;
}
export default ProjectsDetails;
