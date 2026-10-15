import styles from "./CodeCard.module.css";

function CodeCard() {
  return (
    <figure className={styles.container}>
      <figcaption>profile.ts</figcaption>
      <pre>
        <code>
          <span>{"const jp = {"}</span>
          <span>{'  nome: "JP",'}</span>
          <span>{'  cargo: "Dev front-end em formação",'}</span>
          <span>{'  stack: ["HTML", "CSS", "JavaScript", "React"],'}</span>
          <span>{'  loc: ["Campo Grande", "MS", "Brasil"],'}</span>
          <span>{"};"}</span>
        </code>
      </pre>
    </figure>
  );
}

export default CodeCard;
