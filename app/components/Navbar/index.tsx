import Image from "next/image"
import styles from './styles.module.scss'

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <nav>
          <a href="/" className={styles.logo}>
            <Image
              src="/images/logo-fiap.svg"
              alt="Logo FIAP"
              width={144}
              height={39}
              priority
            />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar 