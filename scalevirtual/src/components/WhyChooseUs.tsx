'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SVG_PATHS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo([leftRef.current, rightRef.current], { x: (i) => (i === 0 ? -40 : 40) }, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      x: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power4.out',
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8 md:gap-10">
        <div ref={leftRef} className="bg-foreground rounded-2xl min-h-[340px] aspect-square flex items-center justify-center text-grey text-sm border border-transparent hover:border-green/20 transition-all duration-300 ease-out">
          Photo
        </div>
        <div ref={rightRef} className="bg-foreground rounded-2xl min-h-[340px] p-8 md:p-12 relative border border-transparent hover:border-green/20 transition-all duration-300 ease-out flex flex-col">
          <img src={SVG_PATHS.icon} alt="" className="absolute top-6 right-6 w-14 h-14 opacity-90" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-grey text-lg leading-relaxed mb-4">
            After supporting founders across Dubai and India, we created ScaleVirtual to serve founders worldwide. We prioritize quality, clarity, and long-term partnerships.
          </p>
          <p className="text-grey text-lg leading-relaxed">
            With daily communication, fast turnaround, and a <strong className="text-black">dedicated one point of contact</strong>, we act as an extension of your team, handling admin, operations, sales, and marketing around your priorities.
          </p>
        </div>
      </div>
    </section>
  )
}
