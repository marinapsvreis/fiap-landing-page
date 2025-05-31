"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import styles from './styles.module.scss'

export default function LineTwo() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!trackRef.current) return

    const track = trackRef.current
    const text = track.children[0] as HTMLElement
    const width = text.offsetWidth

    gsap.fromTo(
      track,
      { x: -width },
      {
        x: 0,
        duration: 12,
        ease: "linear",
        repeat: -1,
      }
    )
  }, [])

  return (
    <div className={styles.lineTwoContainer}>
      <div className={styles.lineTwoTrack} ref={trackRef}>
        <span className={styles.lineTwoText}>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</span>
        <span className={styles.lineTwoText}>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</span>
      </div>
    </div>
  )
}