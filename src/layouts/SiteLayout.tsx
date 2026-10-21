import { Outlet } from "react-router";
import styles from "./SiteLayout.module.css";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

function SiteLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Topbar />
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.siteFooter}>
        <Footer />
      </footer>
    </div>
  );
}

export default SiteLayout;
