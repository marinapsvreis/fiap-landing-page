"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import styles from './styles.module.scss'

export default function LineOne() {
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!lineRef.current) return
    const track = lineRef.current
    const textWidth = track.scrollWidth / 2
    gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -textWidth,
        duration: 12,
        ease: "none",
        repeat: -1,
      }
    )
  }, [])

  return (
    <div className={styles.lineOneContainer}>
      <div className={styles.lineOneTrack} ref={lineRef}>
        <span className={styles.lineOneText}>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</span>
        <span className={styles.lineOneText}>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</span>
        <div className={styles.lineOneBottomLine}></div>
      </div>
    </div>
  )
}