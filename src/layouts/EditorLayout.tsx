import { Link, Outlet } from "react-router";
import styles from "./EditorLayout.module.css";
import Sidebar from "../components/layout/Sidebar";

function EditorLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.topbar}>topbar</header>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>

      <section className={styles.terminal}>terminal</section>
    </div>
  );
}

export default EditorLayout;
