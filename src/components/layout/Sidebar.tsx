import { Link } from "react-router";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/projects">
        Projetos
      </Link>
      <Link className={styles.link} to="/contact">
        Contato
      </Link>
    </nav>
  );
}

export default Sidebar;
