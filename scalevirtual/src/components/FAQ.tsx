'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SVG_PATHS, LINKS } from '@/lib/constants'

const FAQ_ITEMS = [
  { q: 'How do I get started?', a: 'First book a call with us and we will have an initial conversation on the requirements. Or you can email us or WhatsApp as well.' },
  { q: 'How many members are in your team?', a: 'We have a small team of 30 people, managing only 50-100 founders at a time.' },
  { q: 'How is your delivery times?', a: 'As you needed.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[700px] mx-auto">
        <div className="text-center mb-12">
          <a
            href={LINKS.scheduleCall}
            className="inline-block bg-green text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 mb-12"
          >
            Contact us for custom pricing
          </a>
        </div>
        <div className="relative">
          <img src={SVG_PATHS.icon} alt="" className="absolute -top-2 -right-2 w-12 h-12 opacity-90" />
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            <span className="font-bold">Frequently</span>{' '}
            <span className="italic font-serif">Asked Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-foreground rounded-2xl overflow-hidden border border-transparent hover:border-green/20 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 font-semibold flex justify-between items-center"
              >
                {item.q}
                <span className="text-green text-xl">{open === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-grey text-sm leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
