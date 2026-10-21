import type { ReactNode } from "react";
import { Link } from "react-router";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
  to: string;
  variant: "primary" | "secondary";
  children: ReactNode;
};

function ButtonLink({ to, variant, children }: ButtonLinkProps) {
  return (
    <Link to={to} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </Link>
  );
}

export default ButtonLink;
