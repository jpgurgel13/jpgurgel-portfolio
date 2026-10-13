import { Outlet } from "react-router";
import styles from "./EditorLayout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
function EditorLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.topbar}>
        <Topbar />
      </header>

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
