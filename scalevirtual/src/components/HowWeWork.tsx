'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { label: 'Initial Meeting', key: 'initial' },
  { label: 'Onboarding', key: 'onboarding' },
  { label: 'Execution', key: 'execution' },
]

const POINTS = [
  'A dedicated point of contact',
  'Clear ownership of responsibilities',
  'Daily visibility into execution',
  'Proactive follow-ups and planning',
]

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    gsap.fromTo([titleRef.current, stepsRef.current, listRef.current], { y: 40 }, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power4.out',
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 ref={titleRef} className="text-2xl md:text-3xl font-bold mb-16">
          How We Work
        </h2>
        <div
          ref={stepsRef}
          className="flex justify-center gap-6 md:gap-12 mb-16"
        >
          {STEPS.map((step) => (
            <div key={step.key} className="flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 rounded-full border-2 border-green flex items-center justify-center text-sm font-semibold text-green">
                {STEPS.indexOf(step) + 1}
              </div>
              <span className="text-grey font-medium">{step.label}</span>
              {step.key !== 'execution' && (
                <div className="hidden md:block w-12 h-px bg-grey/40" />
              )}
            </div>
          ))}
        </div>
        <ul ref={listRef} className="space-y-4 text-left max-w-xl mx-auto">
          {POINTS.map((point) => (
            <li key={point} className="flex items-center gap-3 text-grey">
              <span className="w-2 h-2 rounded-full bg-green flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
