'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  {
    title: 'Administrative',
    items: ['Customer Service', 'Acquisitions', 'Data Entry', 'Human Resources', 'General Office Work'],
  },
  {
    title: 'Sales',
    items: ['Lead Generations', 'Cold Calling', 'Lead Nurturing', 'Lead Follow Up'],
  },
  {
    title: 'Virtual Assistance',
    items: ['Admin Assistance', 'Emailing', 'Scheduling', 'Social Media Management'],
  },
  {
    title: 'Professionals',
    items: ['Accounting', 'Bookkeeping', '3D Visualization', 'Web Development', 'Graphic Design', 'Video Editing'],
  },
  {
    title: 'Marketing Support',
    items: ['Content Creation', 'SEO Optimization', 'Paid Ads Management', 'Social Media Growth'],
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
    gsap.fromTo(gridRef.current, { opacity: 0.85 }, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      duration: 0.7,
      ease: 'power4.out',
    })
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-center mb-4 italic font-serif">
          Service Packages
        </h2>
        <p className="text-grey text-sm text-center mb-16">packages</p>
        <div className="overflow-hidden pb-6 -mx-6 md:-mx-10">
          <div
            ref={gridRef}
            className="flex gap-6 animate-marquee-left w-max hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {[...SERVICES, ...SERVICES].map((service, idx) => (
              <div
                key={`${service.title}-${idx}`}
                className="service-card flex-shrink-0 w-[300px] min-h-[280px] bg-foreground rounded-2xl p-8 border border-transparent hover:border-green/25 transition-all duration-300 ease-out flex flex-col shadow-sm"
              >
                <h3 className="text-lg font-bold mb-4 text-black">{service.title}</h3>
                <ul className="space-y-2 text-grey text-sm">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
