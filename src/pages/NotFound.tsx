import { Link } from "react-router";
import styles from "./NotFound.module.css";
import LogoFull from "../components/layout/LogoFull";

function NotFound() {
  return (
    <section className={styles.container}>
      <LogoFull />
      <h1 className={styles.title}>Erro 404</h1>
      <p className={styles.text}>
        Comando não encontrado: essa página não existe (ou ainda não foi
        escrita).
      </p>
      <Link to="/" className={styles.link}>
        Voltar para o início
      </Link>
    </section>
  );
}

export default NotFound;
