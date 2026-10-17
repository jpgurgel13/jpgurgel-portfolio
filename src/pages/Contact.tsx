import SpiderSleepImage from "../assets/mascot/aranha-chip/8-dormindo.png";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <section className={styles.container}>
      <title>Contato | (em construção)</title>
      <h1 className="title">Contatos (em construção)</h1>
      <img
        className={styles.mascot}
        src={SpiderSleepImage}
        alt="Aranha-Chip, o mascote do site, dormindo"
        width={192}
        height={192}
      />
      <section>
        <h2>WhatsApp</h2>
        <a href="#">Whats</a>
        <h2>Instagram</h2>
        <a href="#">Instagram</a>
      </section>
    </section>
  );
}

export default Contact;
