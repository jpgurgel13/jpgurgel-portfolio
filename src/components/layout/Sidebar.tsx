import { NavLink } from "react-router";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/projects">
        Projetos
      </NavLink>
      <NavLink className={styles.link} to="/contact">
        Contato
      </NavLink>
    </nav>
  );
}

export default Sidebar;
