'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Use placeholder images until you add real ones to public/images/results/ (result-1.jpg … result-15.jpg)
const RESULTS_IMAGES = Array.from({ length: 15 }, (_, i) => ({
  src: `https://placehold.co/800x450/0d3b2c/9eb8a8?text=Result+${i + 1}`,
  alt: `Result ${i + 1}`,
}))

export function Results() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 40 }, {
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

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RESULTS_IMAGES.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="results" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <h2 ref={titleRef} className="text-2xl md:text-3xl font-bold text-center mb-16">
          Results
        </h2>
        <div className="relative">
          <div
            ref={trackRef}
            className="relative w-full aspect-[16/9] md:aspect-[2/1] max-h-[500px] rounded-2xl overflow-hidden bg-foreground"
          >
            {RESULTS_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-[800ms] ease-out ${
                  i === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="w-full h-full flex items-center justify-center bg-grey/20 text-grey text-sm hidden">
                  Image {i + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {RESULTS_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-green w-6' : 'bg-grey/40 hover:bg-grey/60'
                }`}
                aria-label={`Go to result ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
