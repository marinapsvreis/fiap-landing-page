"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"
import styles from './styles.module.scss'

export default function HeroText() {
  const firstLineRef = useRef<HTMLSpanElement>(null)
  const secondLineRef = useRef<HTMLSpanElement>(null)
  const bgTextRef = useRef<HTMLSpanElement>(null)
  const [hidden, setHidden] = useState(true)

  useGSAP(() => {
    setHidden(false)

    const tl = gsap.timeline()

    tl.fromTo(
      firstLineRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }
    )
      .fromTo(
        secondLineRef.current,
        {
          y: -50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        },
        "-=0.4"
      )
      .fromTo(
        bgTextRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out"
        },
        "-=0.4"
      )
  }, [])

  return (
    <h1 className={styles.title}>
      <span
        className={`${styles.bgtext} ${hidden ? styles.bgtextHidden : ""}`}
        ref={bgTextRef}
      >
        SOBRE
      </span>
      <span
        ref={firstLineRef}
        className={hidden ? styles.heroTextHidden : ""}
      >
        A Melhor Faculdade
      </span>
      <br />
      <span
        className={`${styles.titleSecondLine} ${hidden ? styles.heroTextHiddenSecond : ""}`}
        ref={secondLineRef}
      >
        de Tecnologia
      </span>
    </h1>
  )
}