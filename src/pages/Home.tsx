import { Link } from "react-router";
import styles from "./Home.module.css";
function Home() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Tecendo a web<span className={styles.cursor}>_</span>
      </h1>
      <p className={styles.text}>
        Sou o JP, desenvolvedor front-end em formação, criando projetos com
        HTML, CSS, JavaScript e React enquanto evoluo na prática.
      </p>
      <div className={styles.buttonContainer}>
        <Link to="/projects" className={styles.buttonPrimary}>
          Ver projetos
        </Link>
        <Link to="/contact" className={styles.buttonSecondary}>
          Fale comigo!
        </Link>
      </div>
    </section>
  );
}

export default Home;
