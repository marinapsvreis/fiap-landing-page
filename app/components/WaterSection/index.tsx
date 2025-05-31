"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

const totalFrames = 192;

export default function WaterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const obj = { currentFrame: 0 };

    gsap.to(obj, {
      currentFrame: totalFrames - 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom 30%",
        scrub: 1,
      },
      onUpdate: () => {
        const current = Math.round(obj.currentFrame);
        setFrame(current);
      },
    });
  }, []);

  const paddedFrame = String(frame).padStart(3, "0");
  const imageSrc = `/images/water/water_${paddedFrame}.jpg`;

  return (
    <section className={styles.waterScrollSection} ref={sectionRef}>
      <Image
        src={imageSrc}
        alt={`Frame ${frame}`}
        width={1920}
        height={1080}
        className={styles.waterFrame}
        priority
      />
    </section>
  );
}
