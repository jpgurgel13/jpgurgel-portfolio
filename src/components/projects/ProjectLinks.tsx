import styles from "./ProjectLinks.module.css";

type ProjectLinksProps = {
  liveUrl?: string;
  repoUrl?: string;
};

function ProjectLinks({ liveUrl, repoUrl }: ProjectLinksProps) {
  return (
    <div className={styles.linksContainer}>
      {liveUrl && (
        <a
          className={styles.liveLink}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver online
        </a>
      )}
      {repoUrl && (
        <a
          className={styles.repoLink}
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código
        </a>
      )}
    </div>
  );
}

export default ProjectLinks;
