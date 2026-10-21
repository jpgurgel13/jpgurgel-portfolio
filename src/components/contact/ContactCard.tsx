import { ArrowUpRight } from "lucide-react";
import type { ContactLink } from "../../types/contactTypes";
import styles from "./ContactCard.module.css";

type ContactCardProps = {
  contact: ContactLink;
};

function ContactCard({ contact }: ContactCardProps) {
  const Icon = contact.icon;

  return (
    <a
      className={styles.card}
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.iconBox}>
        <Icon size={24} aria-hidden="true" />
      </span>

      <span className={styles.texts}>
        <span className={styles.label}>{contact.label}</span>
        <span className={styles.handle}>{contact.handle}</span>
        <span className={styles.description}>{contact.description}</span>
      </span>

      <ArrowUpRight className={styles.arrow} size={20} aria-hidden="true" />
    </a>
  );
}

export default ContactCard;
