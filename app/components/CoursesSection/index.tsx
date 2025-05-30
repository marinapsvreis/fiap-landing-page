import styles from "./styles.module.scss";

export default function CoursesSection() {
  return (
    <section className={styles.courses}>
      <div className={styles.coursesHeader}>
        <div className={styles.coursesTitle}>
          <h3 className={styles.coursesTitleText}>Cursos</h3>
          <p className={styles.coursesTitleSubtext}>Cursos de Curta Duração</p>
        </div>
        <div className={styles.categoriesList}>
          <p className={styles.category}>TECNOLOGIA</p>
          <p className={styles.category}>INOVAÇÃO</p>
          <p className={styles.category}>NEGÓCIOS</p>
        </div>
      </div>
      <p className={styles.categoryTitle}>Tecnologia</p>
      <ul className={styles.coursesList}>
        <li className={styles.course}>Big Data Ecosystem <span className={styles.courseMode}>REMOTO • LIVE</span></li>
        <li className={styles.course}>Creating Dashboards for BI <span className={styles.courseMode}>REMOTO • LIVE</span></li>
        <li className={styles.course}>Big Data Science - Machine Learning & Data Mining <span className={styles.courseMode}>REMOTO • LIVE + MULTIMIDIA</span></li>
        <li className={styles.course}>Storytelling <span className={styles.courseMode}>REMOTO • LIVE</span></li>
      </ul>
    </section>
  );
}