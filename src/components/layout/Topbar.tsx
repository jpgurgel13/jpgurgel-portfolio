import { Link, NavLink } from "react-router";
import styles from "./Topbar.module.css";
import LogoSymbol from "./LogoSymbol";
import { navItems } from "../../data/navigation";
import ThemeToggle from "./ThemeToggle";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Link className={styles.brand} to="/">
        <LogoSymbol />
      </Link>

      <div className={styles.actions}>
        <nav className={styles.nav} aria-label="Principal">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={styles.link}>
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Topbar;
