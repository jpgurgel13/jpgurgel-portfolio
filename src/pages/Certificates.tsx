import { useState } from "react";
import { certificateList } from "../data/certificatesData";
import type { Certificate } from "../types/certificateTypes";
import CertificateCard from "../components/certificates/CertificateCard";
import CertificateDialog from "../components/certificates/CertificateDialog";
import styles from "./Certificates.module.css";

function Certificates() {
  const [openCertificate, setOpenCertificate] = useState<Certificate | null>(
    null,
  );

  return (
    <section className={styles.container}>
      <title>Certificados | jpgurgel</title>
      <div className={styles.intro}>
        <h1 className={styles.title}>Certificados</h1>
        <p className={styles.text}>
          Cursos que concluí na Alura e no Curso em Vídeo. Clique na imagem
          para ampliar e na seta para ver os detalhes e o link de verificação.
        </p>
      </div>

      <div className={styles.grid}>
        {certificateList.map((item) => (
          <CertificateCard
            key={item.slug}
            certificate={item}
            onOpenImage={setOpenCertificate}
          />
        ))}
      </div>

      <CertificateDialog
        certificate={openCertificate}
        onClose={() => setOpenCertificate(null)}
      />
    </section>
  );
}

export default Certificates;
