import { Link } from "react-router";
import styles from "./Topbar.module.css";
function Topbar() {
  return (
    <nav className={styles.topbar}>
      <Link className={styles.brand} to="/">
        jpgurgel<span className={styles.accent}>_</span>
      </Link>
    </nav>
  );
}
export default Topbar;
