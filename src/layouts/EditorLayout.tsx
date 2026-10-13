import { Link, Outlet } from "react-router";
import styles from "./EditorLayout.module.css";

function EditorLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.topbar}>topbar</header>

      <nav className={styles.sidebar}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projetos</Link>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>

      <section className={styles.terminal}>terminal</section>
    </div>
  );
}

export default EditorLayout;
