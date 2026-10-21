import { contactList } from "../data/contactData";
import ContactCard from "../components/contact/ContactCard";
import Mascot from "../components/ui/Mascot";
import spiderContactImage from "../assets/mascot/aranha-chip-acessorios/3-contato.png";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.container}>
      <title>Contato | jpgurgel</title>

      <div className={styles.intro}>
        <Mascot
          className={styles.mascot}
          src={spiderContactImage}
          alt="Aranha-Chip, o mascote do site, sorrindo e segurando uma carta"
          width={240}
          height={192}
        />
        <p className={styles.label}>{"// contato"}</p>
        <h1 className={styles.title}>
          Vamos conversar<span className={styles.highlight}>?</span>
        </h1>
        <p className={styles.text}>
          Tem uma vaga, um projeto ou só quer trocar uma ideia sobre front-end?
          Me chama em qualquer um destes canais.
        </p>
      </div>

      <ul className={styles.list}>
        {contactList.map((contact) => (
          <li key={contact.label}>
            <ContactCard contact={contact} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
