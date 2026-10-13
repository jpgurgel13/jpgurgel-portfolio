import { useParams } from "react-router";
function ProjectDetails() {
  const { slug } = useParams();

  return <p>Detalhes do projeto: {slug}</p>;
}
export default ProjectDetails;
