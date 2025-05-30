"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import styles from './styles.module.scss'

export default function LineFour() {
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!lineRef.current) return
    const track = lineRef.current
    const textWidth = track.scrollWidth / 2
    const moveDistance = textWidth * 0.3 // Reduzindo para 30% da distância original

    gsap.to(track, {
      x: moveDistance, // Usando a distância reduzida
      ease: "none",
      scrollTrigger: {
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    })
  }, [])

  return (
    <div className={styles.lineFourContainer}>
      <div className={styles.lineFourTrack} ref={lineRef}>
        <span className={styles.lineFour}>MUITO. MUITO ALÉM DOS TUTORIAIS</span>
        <span className={styles.lineFour}>MUITO. MUITO ALÉM DOS TUTORIAIS</span>
      </div>
    </div>
  )
}