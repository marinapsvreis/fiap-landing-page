"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from './styles.module.scss'

function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  function handleScroll() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

    if (progressRef.current)
      progressRef.current.style.width = `${progress}%`

    setHasScrolled(progress > 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll() // inicializa corretamente

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${hasScrolled ? styles.scrolled : ''}`}>
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
      <div className={styles.progressBar} ref={progressRef} />
    </header>
  )
}

export default Navbar 