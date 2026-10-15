import styles from "./CodeCard.module.css";

function CodeCard() {
  return (
    <figure className={styles.container}>
      <figcaption className={styles.fileName}>profile.ts</figcaption>
      <pre className={styles.pre}>
        <code className={styles.code}>
          <span>
            <span className={styles.keyword}>const</span>
            {" jp = {"}
          </span>
          <span>
            {"  "}
            <span className={styles.property}>nome</span>
            {": "}
            <span className={styles.string}>{'"JP"'}</span>
            {","}
          </span>
          <span>
            {"  "}
            <span className={styles.property}>cargo</span>
            {": "}
            <span className={styles.string}>
              {'"Dev front-end em formação"'}
            </span>
            {","}
          </span>
          <span>
            {"  "}
            <span className={styles.property}>stack</span>
            {": ["}
            <span className={styles.string}>{'"HTML"'}</span>
            {", "}
            <span className={styles.string}>{'"CSS"'}</span>
            {", "}
            <span className={styles.string}>{'"JavaScript"'}</span>
            {", "}
            <span className={styles.string}>{'"React"'}</span>
            {"],"}
          </span>
          <span>
            {"  "}
            <span className={styles.property}>loc</span>
            {": ["}
            <span className={styles.string}>{'"Campo Grande"'}</span>
            {", "}
            <span className={styles.string}>{'"MS"'}</span>
            {", "}
            <span className={styles.string}>{'"Brasil"'}</span>
            {"],"}
          </span>
          <span>{"};"}</span>
        </code>
      </pre>
    </figure>
  );
}

export default CodeCard;
