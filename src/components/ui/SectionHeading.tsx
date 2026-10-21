import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  id: string;
  label: string;
  title: string;
};

function SectionHeading({ id, label, title }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <p className={styles.label}>{`// ${label}`}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;
