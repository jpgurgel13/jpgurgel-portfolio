import { Link } from "react-router";
import styles from "./NotFound.module.css";
import Mascot from "../components/ui/Mascot";
import spiderErrorImage from "../assets/mascot/aranha-chip/7-erro.png";

function NotFound() {
  return (
    <section className={styles.container}>
      <title>X 404 Página não encontrada X</title>
      <Mascot
        src={spiderErrorImage}
        alt="Aranha-Chip, o mascote do site, com olhos em X e cara de erro"
        width={192}
        height={192}
      />
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
