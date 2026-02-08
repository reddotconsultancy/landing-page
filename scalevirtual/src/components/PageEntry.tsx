'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

export function PageEntry({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    // Fast, modern intro:
    // 1) Text logo scales / fades in
    // 2) Tagline glides up
    // 3) Quick hold, then overlay fades away
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out' },
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.45,
          ease: 'power4.inOut',
          onComplete: () => setVisible(false),
        })
      },
    })

    tl.fromTo(
      wordmarkRef.current,
      { y: 28, scale: 0.94, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        taglineRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45 },
        '-=0.25'
      )
      .to({}, { duration: 0.5 })
  }, [])

  return (
    <>
      {visible && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-foreground to-background"
          aria-hidden="true"
        >
          {/* Soft radial glow behind the logo lockup */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-green/8 blur-[120px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div
              ref={wordmarkRef}
              className="mb-4 flex items-baseline gap-2"
            >
              <span className="font-serif italic text-3xl md:text-4xl lg:text-[2.8rem] text-black leading-none">
                scale
              </span>
              <span className="font-sans font-semibold text-3xl md:text-4xl lg:text-[2.8rem] text-green leading-none">
                virtual
              </span>
              <span className="font-sans text-sm md:text-base lg:text-lg text-grey leading-none">
                .co
              </span>
            </div>

            <p
              ref={taglineRef}
              className="text-xs md:text-sm lg:text-base font-medium tracking-[0.22em] uppercase text-grey/80"
            >
              Admin &amp; Operations for Founders
            </p>
          </div>
        </div>
      )}
      <div className="min-h-screen">{children}</div>
    </>
  )
}
