import { Link, NavLink } from "react-router";
import styles from "./Topbar.module.css";
import logo from "../../assets/logo/jpgurgel-logo-dark.svg";
import { navItems } from "../../data/navigation";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Link className={styles.brand} to="/">
        <img src={logo} alt="jpgurgel" className={styles.logo} />
      </Link>

      <nav className={styles.nav} aria-label="Principal">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={styles.link}>
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Topbar;
