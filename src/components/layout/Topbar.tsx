import { Link } from "react-router";
import styles from "./Topbar.module.css";
function Topbar() {
  return (
    <Link className={styles.brand} to="/">
      jpgurgel<span className={styles.accent}>_</span>
    </Link>
  );
}
export default Topbar;
