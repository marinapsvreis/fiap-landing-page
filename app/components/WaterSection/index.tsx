/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

const numbers = ["01", "02", "03", "04", "05", "06"];

export default function WaterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [number, setNumber] = useState(numbers[0]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      {
        clipPath: "inset(0% 100% 0% 0%)",
        opacity: 0
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
          onUpdate: self => {
            const idx = Math.round(self.progress * (numbers.length - 1));
            setNumber(numbers[idx]);
          }
        }
      }
    );
  }, []);

  return (
    <section className={styles.water} ref={sectionRef}>
      <p className={styles.waterDate}>04-10</p>
      <div className={styles.waterLines}>
        <div className={styles.waterLine}>
          <p className={styles.waterLineText}>
            //DESENVOLVIMENTO SERVERLESS
          </p>
          <div className={styles.waterLineBorder}></div>
        </div>
        <div className={styles.waterLine}>
          <p className={styles.waterBall}>•</p>
          <div className={styles.waterLineBorder}></div>
        </div>
        <div className={styles.waterLine}>
          <div className={styles.waterLineTexts}>
            <p className={styles.waterLineText}>
              //DATA VISUALIZATION
            </p>
            <p className={styles.waterLineText}>
              //WEB HACKING
            </p>
            <div className={styles.waterCoursesCounter}>
              <p className={styles.waterLineTextNumber}>{number}</p>
              <p className={styles.waterLineText}>CURSOS</p>
            </div>
          </div>
          <div className={styles.waterLineBorder}></div>
        </div>
        <div className={styles.waterLineBottom}>
          <div className={styles.waterLineTexts}>
            <p className={styles.waterLineText}>
              //CYBER CRIMES
            </p>
            <p className={styles.waterLineText}>
              //CLOUD SERVICES
            </p>
          </div>
          <div className={styles.waterLineBorder}></div>
        </div>
      </div>
    </section>
  );
}