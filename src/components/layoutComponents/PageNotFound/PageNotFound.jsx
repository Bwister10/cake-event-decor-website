import styles from "./pageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.NoPageSection}>
      <div className={styles.NoPageContainer}>
        <div className={styles.noPagetext}>
          <h3>Oops!, Page doesn't exist....😶</h3>
          <p>
            To return back to home page. <a href="/">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
