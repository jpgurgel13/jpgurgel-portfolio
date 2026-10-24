import { useState } from "react";
import { certificateList } from "../data/certificatesData";
import type { Certificate } from "../types/certificateTypes";
import CertificateCard from "../components/certificates/CertificateCard";
import CertificateDialog from "../components/certificates/CertificateDialog";
import SectionHeading from "../components/ui/SectionHeading";
import styles from "./Certificates.module.css";

function Certificates() {
  const [openCertificate, setOpenCertificate] = useState<Certificate | null>(
    null,
  );

  const degreeList = certificateList.filter(
    (certificate) => certificate.kind === "formação",
  );
  const courseList = certificateList.filter(
    (certificate) => certificate.kind === "curso",
  );

  return (
    <section className={styles.container}>
      <title>Certificados | jpgurgel</title>
      <div className={styles.intro}>
        <h1 className={styles.title}>Certificados</h1>
        <p className={styles.text}>
          Cursos que concluí na Alura e no Curso em Vídeo. Clique na imagem para
          ampliar e na seta para ver os detalhes e o link de verificação.
        </p>
      </div>

      <section className={styles.group} aria-labelledby="degrees-title">
        <SectionHeading id="degrees-title" label="trilhas" title="Formações" />
        <div className={styles.degreeGrid}>
          {degreeList.map((item) => (
            <CertificateCard
              key={item.slug}
              certificate={item}
              onOpenImage={setOpenCertificate}
            />
          ))}
        </div>
      </section>

      <section className={styles.group} aria-labelledby="courses-title">
        <SectionHeading id="courses-title" label="cursos" title="Cursos" />
        <div className={styles.grid}>
          {courseList.map((item) => (
            <CertificateCard
              key={item.slug}
              certificate={item}
              onOpenImage={setOpenCertificate}
            />
          ))}
        </div>
      </section>

      <CertificateDialog
        certificate={openCertificate}
        onClose={() => setOpenCertificate(null)}
      />
    </section>
  );
}

export default Certificates;
