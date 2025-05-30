"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"
import styles from "./styles.module.scss"

gsap.registerPlugin(ScrollTrigger)

export default function IntroImage() {
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!imageRef.current) return

    gsap.fromTo(
      imageRef.current,
      {
        clipPath: "inset(0% 0% 100% 0%)"
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true
        }
      }
    )
  }, [])

  return (
    <div className={styles.imageContainer} ref={imageRef}>
      <Image
        src="/images/intro.png"
        alt="Intro Image"
        width={1495}
        height={804}
        priority
        className={styles.image}
      />
    </div>
  )
}