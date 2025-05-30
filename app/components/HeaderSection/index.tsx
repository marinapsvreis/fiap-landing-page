import HeroText from './HeroText'
import styles from './styles.module.scss'

export default function HeaderSection() {
  return (
    <section className={styles.header}>
      <HeroText />
    </section>
  )
}