import { Outlet } from "react-router";
import styles from "./SiteLayout.module.css";
import Topbar from "../components/layout/Topbar";

function SiteLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Topbar />
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default SiteLayout;
