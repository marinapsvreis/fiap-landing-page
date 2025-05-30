import styles from './styles.module.scss'

export default function HeroText() {
  return (
    <h1 className={styles.title}>
      <span className={styles.bgtext}>SOBRE</span>
      A Melhor Faculdade<br />
      <span className={styles.titleSecondLine}>de Tecnologia</span>
    </h1>
  )
}