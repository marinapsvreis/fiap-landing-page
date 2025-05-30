/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./styles.module.scss";

export default function WaterSection() {
  return (
    <section className={styles.water}>
      <p className={styles.waterDate}>04-10</p>
      <div className={styles.waterLines}>
        <div className={styles.waterLine}>
          <p className={styles.waterLineText}>
            //DESENVOLVIMENTO SERVERLESS
          </p>
          <div className={styles.waterLineBorder}></div>
        </div>
        <div className={styles.waterLine}>
          <p className={styles.waterBall}>•</p>
          <div className={styles.waterLineBorder}></div>
        </div>
        <div className={styles.waterLine}>
          <div className={styles.waterLineTexts}>
            <p className={styles.waterLineText}>
              //DATA VISUALIZATION
            </p>
            <p className={styles.waterLineText}>
              //WEB HACKING
            </p>
            <div className={styles.waterCoursesCounter}>
              <p className={styles.waterLineTextNumber}>06</p>
              <p className={styles.waterLineText}>CURSOS</p>
            </div>
          </div>
          <div className={styles.waterLineBorder}></div>
        </div>
        <div className={styles.waterLineBottom}>
          <div className={styles.waterLineTexts}>
            <p className={styles.waterLineText}>
              //CYBER CRIMES
            </p>
            <p className={styles.waterLineText}>
              //CLOUD SERVICES
            </p>
          </div>
          <div className={styles.waterLineBorder}></div>
        </div>
      </div>
    </section>
  );
}