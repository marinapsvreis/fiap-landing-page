"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef, useState } from "react"
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  useGSAP(() => {
    if (!progressRef.current) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (progressRef.current) {
          progressRef.current.style.width = `${self.progress * 100}%`
          setHasScrolled(self.progress > 0)
        }
      }
    })

    return () => {
      scrollTrigger.kill()
    }
  }, { scope: progressRef })

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