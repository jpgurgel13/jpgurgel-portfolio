import { ChevronDown, ExternalLink } from "lucide-react";
import type { Certificate } from "../../types/certificateTypes";
import TechList from "../projects/TechList";
import styles from "./CertificateCard.module.css";

type CertificateCardProps = {
  certificate: Certificate;
  onOpenImage: (certificate: Certificate) => void;
};

function CertificateCard({ certificate, onOpenImage }: CertificateCardProps) {
  const cardClassName =
    certificate.kind === "formação"
      ? `${styles.card} ${styles.featured}`
      : styles.card;

  return (
    <article className={cardClassName}>
      <button
        type="button"
        className={styles.imageButton}
        onClick={() => onOpenImage(certificate)}
        aria-label={`Ampliar certificado: ${certificate.title}`}
      >
        <img
          className={styles.image}
          src={certificate.image}
          alt=""
          loading="lazy"
          width={1268}
          height={864}
        />
      </button>

      <details className={styles.details}>
        <summary className={styles.summary}>
          <h3 className={styles.title}>{certificate.title}</h3>
          <ChevronDown className={styles.arrow} size={20} aria-hidden="true" />
        </summary>

        <div className={styles.info}>
          <p className={styles.platform}>
            Emitido por <strong>{certificate.platform}</strong>
          </p>

          {certificate.technologies.length > 0 && (
            <TechList technologies={certificate.technologies} />
          )}

          {certificate.certificateUrl && (
            <a
              className={styles.verifyLink}
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verificar certificado
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </details>
    </article>
  );
}

export default CertificateCard;
