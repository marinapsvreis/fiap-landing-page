"use client"

import { useState } from "react"
import styles from "./styles.module.scss"
import { faqs } from "./faqs"

export default function FaqSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className={styles.faq}>
      <div className={styles.faqHeader}>
        <h2 className={styles.faqTitle}>FAQ</h2>
        <p className={styles.faqSubtitle}>Dúvidas Frequentes</p>
      </div>
      <div className={styles.faqGrid}>
        {faqs.map((faq, idx) => (
          <button
            key={faq.question}
            className={`${styles.faqItem} ${hovered === idx ? styles.active : ""}`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(idx)}
            onBlur={() => setHovered(null)}
            aria-expanded={hovered === idx}
            type="button"
          >
            <div className={styles.faqQuestion}>{faq.question}</div>
            <div className={styles.faqAnswer} aria-hidden={hovered !== idx}>
              {faq.answer}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}