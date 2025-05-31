'use client'

import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

interface SmoothScrollProps {
  children: React.ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const smoother = useRef<ScrollSmoother | null>(null)

  useEffect(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    })

    return () => {
      smoother.current?.kill()
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
} 