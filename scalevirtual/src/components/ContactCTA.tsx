'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { LINKS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(contentRef.current, { y: 40 }, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      duration: 0.7,
      ease: 'power4.out',
    })
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-10">
      <div ref={contentRef} className="max-w-[900px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to delegate properly?
        </h2>
        <p className="text-grey text-lg mb-10">
          If you disappeared for 7 days, would your business run? That answer tells you everything. We help founders step away without day-to-day operations breaking.
        </p>
        <a
          href={LINKS.scheduleCall}
          className="inline-block bg-green text-white px-12 py-5 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  )
}
