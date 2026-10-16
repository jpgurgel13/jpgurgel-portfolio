import styles from "./LogoSymbol.module.css";

function LogoSymbol() {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="jpgurgel">
      <path
        className={styles.letterJ}
        d="M28 10a2 2 0 0 1 2-2h6v34a14 14 0 0 1-28 0v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a6 6 0 0 0 12 0z"
      />
      <path
        className={styles.letterP}
        d="M36 8h6a14 14 0 0 1 0 28h-6v-8h6a6 6 0 0 0 0-12h-6z"
      />
      <rect
        className={styles.cursor}
        x="40"
        y="49"
        width="15"
        height="6"
        rx="2"
      />
    </svg>
  );
}

export default LogoSymbol;
