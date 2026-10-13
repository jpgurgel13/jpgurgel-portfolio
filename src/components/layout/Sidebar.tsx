import { NavLink } from "react-router";
import styles from "./Sidebar.module.css";
import { House } from "lucide-react";
import { Folder } from "lucide-react";
import { Mail } from "lucide-react";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <NavLink className={styles.link} to="/">
        <House size={16} />
        Home
      </NavLink>
      <NavLink className={styles.link} to="/projects">
        <Folder size={16} />
        Projetos
      </NavLink>
      <NavLink className={styles.link} to="/contact">
        <Mail size={16} />
        Contato
      </NavLink>
    </nav>
  );
}

export default Sidebar;
