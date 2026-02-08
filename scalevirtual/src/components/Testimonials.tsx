'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FOUNDERS = ['Vaishnav', 'Abshar', 'Shan', 'Huda', 'Adam']
const LOGOS = ['reddot', 'ytvidoes', 'Lumiya', 'Al Hana Services']

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const quoteRef = useRef<HTMLParagraphElement>(null)
  const attributionRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo([titleRef.current, subRef.current, quoteRef.current, attributionRef.current], { y: 40 }, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power4.out',
    })
    gsap.fromTo(cardsRef.current, { opacity: 0.9 }, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      duration: 0.7,
      ease: 'power4.out',
      delay: 0.15,
    })
    gsap.fromTo(logosRef.current?.children || [], { y: 8 }, {
      scrollTrigger: {
        trigger: logosRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      y: 0,
      duration: 0.45,
      stagger: 0.06,
      ease: 'power4.out',
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-2 text-black italic font-serif">
            Testimonials
          </h2>
          <p ref={subRef} className="text-grey text-sm">From founders</p>
        </div>
        <blockquote className="text-center mb-12">
          <p ref={quoteRef} className="text-xl md:text-2xl text-grey italic font-serif leading-relaxed mb-8">
            &ldquo;Lore impsum Lore impusm lorem ipsusm lorem ipsum Dolor&rdquo;
          </p>
        </blockquote>
        <p ref={attributionRef} className="text-grey text-sm md:text-base text-center mb-12">
          {FOUNDERS.join(' · ')} — And 15+ More Founders
        </p>
        <div className="overflow-hidden -mx-6 md:-mx-10 mb-16">
          <div
            ref={cardsRef}
            className="flex gap-5 md:gap-6 animate-marquee-left w-max py-2 hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {[...Array(8), ...Array(8)].map((_, i) => (
              <div
                key={i}
                className="testimonial-card flex-shrink-0 w-[260px] md:w-[280px] min-h-[180px] aspect-[4/3] rounded-2xl bg-green/90 flex items-center justify-center p-6 border border-transparent hover:border-green/40 transition-all duration-300 ease-out shadow-sm"
              >
                <span className="text-white/90 text-sm text-center font-medium">Client testimonial</span>
              </div>
            ))}
          </div>
        </div>
        <div ref={logosRef} className="flex flex-wrap justify-center gap-8 md:gap-12 text-grey font-medium text-sm">
          {LOGOS.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
