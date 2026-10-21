import styles from "./Mascot.module.css";

type MascotProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

function Mascot({ src, alt, width, height, className }: MascotProps) {
  const mascotClassName = className
    ? `${styles.mascot} ${className}`
    : styles.mascot;

  return (
    <img
      className={mascotClassName}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Mascot;
