import { Link } from "react-router";
import type { JourneyStepData } from "../../types/aboutTypes";
import TechList from "../projects/TechList";
import styles from "./JourneyStep.module.css";

type JourneyStepProps = {
  step: number;
  data: JourneyStepData;
  isCurrent?: boolean;
};

function JourneyStep({ step, data, isCurrent = false }: JourneyStepProps) {
  const stepClassName = isCurrent
    ? `${styles.step} ${styles.current}`
    : styles.step;

  return (
    <li className={stepClassName}>
      <span className={styles.number} aria-hidden="true">
        {String(step).padStart(2, "0")}
      </span>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {data.link ? (
            <Link to={data.link} className={styles.titleLink}>
              {data.title}
            </Link>
          ) : (
            data.title
          )}
        </h3>
        {data.text && <p className={styles.text}>{data.text}</p>}
        <TechList technologies={data.technologies} />
      </div>
    </li>
  );
}

export default JourneyStep;
