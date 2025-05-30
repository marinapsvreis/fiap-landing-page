import styles from "./styles.module.scss";

export default function FaqSection() {
  return (
    <section className={styles.faq}>
      <div className={styles.faqHeader}>
        <h3 className={styles.faqTitle}>FAQ</h3>
        <p className={styles.faqSubtitle}>Dúvidas Frequentes</p>
      </div>
      <div className={styles.faqList}>
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>QUANDO POSSO ME MATRICULAR?</p>
          <p className={styles.faqAnswer}>
            A partir do momento que o curso estiver disponível, você poderá se matricular.
          </p>
        </div>
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?</p>
          <p className={styles.faqAnswer}>
            Sim, você pode fazer mais de um curso ao mesmo tempo.
          </p>
        </div>
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>QUAIS OS PRÉ-REQUISITOS?</p>
          <p className={styles.faqAnswer}>
            Não há pré-requisitos para a maioria dos cursos.
          </p>
        </div>
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>QUAL A DURAÇÃO DOS CURSOS?</p>
          <p className={styles.faqAnswer}>
            A duração dos cursos varia de acordo com o conteúdo.
          </p>
        </div>
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?</p>
          <p className={styles.faqAnswer}>
            Não, todos os materiais necessários para as aulas serão disponibilizados.
          </p>
        </div>
        <div className={styles.faqItem}>
          <p className={styles.faqQuestion}>VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?</p>
          <p className={styles.faqAnswer}>
            Sim, você receberá um certificado de conclusão de curso após a finalização do curso.
          </p>
        </div>
      </div>
    </section>
  );
}