import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { X } from "lucide-react";
import type { Certificate } from "../../types/certificateTypes";
import styles from "./CertificateDialog.module.css";

type CertificateDialogProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

function CertificateDialog({ certificate, onClose }: CertificateDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (certificate && !dialog.open) {
      dialog.showModal();
    }
    if (!certificate && dialog.open) {
      dialog.close();
    }
  }, [certificate]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-label={certificate ? `Certificado: ${certificate.title}` : undefined}
    >
      {certificate && (
        <div className={styles.content}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={20} aria-hidden="true" />
          </button>
          <img
            className={styles.image}
            src={certificate.image}
            alt={`Certificado do curso ${certificate.title}, emitido por ${certificate.platform}`}
          />
        </div>
      )}
    </dialog>
  );
}

export default CertificateDialog;
