'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    tl.fromTo(titleRef.current, { y: 36 }, { y: 0, duration: 0.85, delay: 0.2 })
      .fromTo(descRef.current, { y: 28 }, { y: 0, duration: 0.7 }, '-=0.55')
      .fromTo(ctaRef.current, { y: 16 }, { y: 0, duration: 0.6 }, '-=0.5')
      .fromTo(trustRef.current, { y: 12 }, { y: 0, duration: 0.5 }, '-=0.4')
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-green/10 blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-green/15 blur-[80px] animate-float" style={{ animationDelay: '-7s' }} />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10 pt-32 pb-20">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight mb-8 text-[#1a1a1a]"
        >
          Complete Admin and Operations Support for{' '}
          <span className="text-[#005E3E] italic font-serif">Founders</span>.
        </h1>
        <p
          ref={descRef}
          className="text-lg md:text-xl text-[#333] max-w-[700px] mx-auto mb-12 leading-relaxed"
        >
          We handle admin, ops, sales, and marketing so you can focus on growth.
        </p>
        <div ref={ctaRef}>
          <a
            href="#contact"
            className="inline-block bg-[#005E3E] text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg shadow-green/25 hover:bg-[#004530] hover:shadow-xl hover:shadow-green/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Call
          </a>
        </div>
        <p ref={trustRef} className="mt-8 text-[#444] text-sm font-semibold">
          Rated 4.8 ⭐
        </p>
      </div>
    </section>
  )
}
