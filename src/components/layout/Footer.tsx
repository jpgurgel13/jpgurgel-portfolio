import { contactList } from "../../data/contactData";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p className={styles.text}>
        © {currentYear} jpgurgel · feito com React e TypeScript
      </p>

      <ul className={styles.socialList}>
        {contactList.map((contact) => {
          const Icon = contact.icon;

          return (
            <li key={contact.label}>
              <a
                className={styles.socialLink}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.label}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
