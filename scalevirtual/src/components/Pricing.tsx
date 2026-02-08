'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { LINKS } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const PLANS = [
  {
    name: 'Basic',
    price: '$500',
    period: '/ month',
    bestFor: 'Founders who want coverage but still manage execution direction.',
    features: [
      'Shared operational support',
      'Task-based execution',
      'Reactive follow-ups',
      'Limited proactive planning',
    ],
  },
  {
    name: 'Essential',
    price: '$1000',
    period: '/ month',
    bestFor: 'Founders scaling teams, sales pipelines, and marketing output.',
    features: [
      'Dedicated execution bandwidth',
      'Sales and marketing follow-through',
      'Process cleanup and documentation',
      'Priority task handling',
      'Weekly operational planning',
    ],
    typicalUse: 'Sales ops, marketing execution, cross-team coordination',
    note: 'Strong, but still "managed by the founder".',
  },
  {
    name: 'Advanced',
    price: '$1500',
    period: '/ month',
    badge: 'Most Chosen',
    bestFor: "Founders who don't want to manage operations at all.",
    features: [
      'Fully embedded operational team',
      'End-to-end ownership of admin, ops, sales, and marketing execution',
      'Founder inbox and internal ops managed',
      'Daily visibility without micromanagement',
      'Proactive planning, execution, and optimization',
      'Systems built so execution runs without founder input',
    ],
    typicalUse: 'Founder-level offloading, business continuity, scale readiness',
  },
]

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
    gsap.utils.toArray<HTMLDivElement>('.pricing-card').forEach((card, i) => {
      gsap.fromTo(card, { y: 36 }, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        y: 0,
        duration: 0.65,
        delay: i * 0.1,
        ease: 'power4.out',
      })
    })
  }, [])

  return (
    <section id="pricing" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <h2 ref={titleRef} className="text-2xl md:text-3xl font-bold text-center mb-16">
          Pricing
        </h2>
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card min-h-[420px] flex flex-col bg-foreground rounded-2xl p-8 border ${
                plan.badge ? 'border-green shadow-lg' : 'border-transparent hover:border-green/25'
              } transition-all duration-300 ease-out`}
            >
              {plan.badge && (
                <span className="inline-block bg-green text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-green mb-2">
                From {plan.price}
                <span className="text-base font-normal text-grey">{plan.period}</span>
              </p>
              <p className="text-grey text-sm mb-6">Best for: {plan.bestFor}</p>
              <ul className="space-y-2 text-grey text-sm mb-6">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              {plan.typicalUse && (
                <p className="text-grey text-xs mb-4 italic">Typical use: {plan.typicalUse}</p>
              )}
              {plan.note && (
                <p className="text-grey text-xs mb-6 italic">{plan.note}</p>
              )}
              <div className="mt-auto pt-2">
              <a
                href={LINKS.scheduleCall}
                className={`block text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.badge
                    ? 'bg-green text-white hover:shadow-xl hover:-translate-y-0.5'
                    : 'bg-black/5 text-black hover:bg-green hover:text-white'
                }`}
              >
                Schedule a Call
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
