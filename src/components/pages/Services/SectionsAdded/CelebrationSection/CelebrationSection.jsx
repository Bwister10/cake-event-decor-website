import styles from "./celebrationSection.module.css";

export default function CelebrationSection() {
  return (
    <section className={styles.canvas}>
      {/* Animated decorative shapes */}
      <div className={`${styles.floatingShape} ${styles.shape1}`}></div>
      <div className={`${styles.floatingShape} ${styles.shape2}`}></div>
      <div className={`${styles.floatingShape} ${styles.shape3}`}></div>
      <div className={`${styles.floatingShape} ${styles.shape4}`}></div>

      {/* Main text */}
      <div className={styles.textContainer}>
        <h2 className={styles.tagline}>
          Celebrations. Creations. Connections.
        </h2>
        <p className={styles.subtext}>
          Where elegance meets unforgettable moments.
        </p>
      </div>
    </section>
  );
}
