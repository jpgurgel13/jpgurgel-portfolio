import { Link } from "react-router";
import styles from "./Topbar.module.css";
import logo from "../../assets/logo/jpgurgel-logo-dark.svg";
function Topbar() {
  return (
    <Link className={styles.brand} to="/">
      <img src={logo} alt="jpgurgel" className={styles.logo} />
    </Link>
  );
}
export default Topbar;
