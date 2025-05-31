"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useRef, useState } from "react"
import { categories } from "./categories"
import styles from "./styles.module.scss"

export default function CoursesSection() {
  const [selected, setSelected] = useState("tecnologia")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const coursesRef = useRef<HTMLUListElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)

  function handleCategoryChange(key: string) {
    if (key === selected || isTransitioning) return
    setIsTransitioning(true)
    const tl = gsap.timeline({
      onComplete: () => {
        setSelected(key)
      }
    })
    if (titleRef.current)
      tl.to(titleRef.current, {
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 0.3,
        ease: "power2.in"
      })
    if (coursesRef.current)
      tl.to(coursesRef.current, {
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 0.4,
        ease: "power2.in"
      })
  }
  useGSAP(() => {
    if (coursesRef.current && titleRef.current) {
      gsap.set([coursesRef.current, titleRef.current], {
        opacity: 0,
        clipPath: "inset(0% 0% 0% 0%)"
      })
      gsap.to([coursesRef.current, titleRef.current], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setIsTransitioning(false)
        }
      })
    }
  }, [selected])

  const category = categories.find(cat => cat.key === selected)
  if (!category) return null

  return (
    <section className={styles.courses}>
      <div className={styles.coursesHeader}>
        <div className={styles.coursesTitle}>
          <h3 className={styles.coursesTitleText}>Cursos</h3>
          <p className={styles.coursesTitleSubtext}>Cursos de Curta Duração</p>
        </div>
        <div className={styles.categoriesList}>
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`${styles.category} ${selected === cat.key ? styles.selected : ""}`}
              onClick={() => handleCategoryChange(cat.key)}
              aria-pressed={selected === cat.key}
              type="button"
              disabled={isTransitioning}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <p className={styles.categoryTitle} ref={titleRef}>
        {category.title}
      </p>
      <ul
        className={styles.coursesList}
        ref={coursesRef}
        style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      >
        {category.courses.map(course => (
          <li className={styles.course} key={course.name}>
            {course.name} <span className={styles.courseMode}>{course.mode}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}