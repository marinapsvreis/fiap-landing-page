
import IntroImage from './IntroImage'
import LineFour from './LineFour'
import LineOne from './LineOne'
import LineThree from './LineThree'
import LineTwo from './LineTwo'
import styles from './styles.module.scss'

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <LineOne />
      <LineTwo />
      <IntroImage />
      <div className={styles.introBottomLines}>
        <LineThree />
        <LineFour />
      </div>
    </section>
  )
}