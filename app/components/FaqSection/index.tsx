"use client"

import { useState } from "react"
import { faqs } from "./faqs"
import styles from "./styles.module.scss"

export default function FaqSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number) {
    if (openIndex === index) setOpenIndex(null)
    else setOpenIndex(index)
  }

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
      <div className={styles.faqMobile}>
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className={`${styles.faqItem} ${openIndex === idx ? styles.open : ""}`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              type="button"
            >
              {faq.question}
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={styles.faqAnswer}
              style={{ display: openIndex === idx ? "block" : "none" }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}