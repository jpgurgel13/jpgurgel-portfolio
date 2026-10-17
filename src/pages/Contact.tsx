import spiderConstructionImage from "../assets/mascot/aranha-chip-acessorios/1-em-construcao.png";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <section className={styles.container}>
      <title>Contato | (em construção)</title>
      <h1 className={styles.title}>Contatos (em construção)</h1>
      <img
        className={styles.mascot}
        src={spiderConstructionImage}
        alt="Aranha-Chip, o mascote do site, de capacete de obra segurando uma placa de atenção"
        width={240}
        height={192}
      />
    </section>
  );
}

export default Contact;
