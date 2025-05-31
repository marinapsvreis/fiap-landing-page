"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import styles from './styles.module.scss'

export default function LineThree() {
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!lineRef.current) return
    const track = lineRef.current
    const textWidth = track.scrollWidth / 2
    const moveDistance = textWidth * 0.3

    gsap.to(track, {
      x: -moveDistance,
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
    <div className={styles.lineThreeContainer}>
      <div className={styles.lineThreeTrack} ref={lineRef}>
        <span className={styles.lineThree}>CONHECIMENTO • SKILLS • CONHECIMENTO • SKILLS • </span>
        <span className={styles.lineThree}>CONHECIMENTO • SKILLS • CONHECIMENTO • SKILLS • </span>
        <div className={styles.lineThreeBottomLine}></div>
      </div>
    </div>
  )
}