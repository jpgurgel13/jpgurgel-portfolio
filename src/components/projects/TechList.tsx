import type { Technology } from "../../types/projectTypes";
import styles from "./TechList.module.css";

type TechListProps = {
  technologies: Technology[];
};

function TechList({ technologies }: TechListProps) {
  return (
    <ul className={styles.techList}>
      {technologies.map((tech) => (
        <li key={tech} className={styles.techTag}>
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default TechList;
