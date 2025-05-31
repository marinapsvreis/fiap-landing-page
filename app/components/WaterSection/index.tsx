/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function WaterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
          end: "bottom -3%",
          scrub: 1
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
              <p className={styles.waterLineTextNumber}>06</p>
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