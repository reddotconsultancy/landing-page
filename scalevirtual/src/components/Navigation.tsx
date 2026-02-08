'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { LINKS } from '@/lib/constants'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power4.out', delay: 0.05 }
      )
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
        scrolled ? 'py-3 bg-foreground/98 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link href="#" className="flex items-center gap-2 shrink-0" onClick={closeMobile}>
          <div className="flex items-baseline gap-1">
            <span className="font-serif italic text-xl md:text-2xl text-black leading-none">scale</span>
            <span className="font-sans font-semibold text-xl md:text-2xl text-green leading-none">virtual</span>
            <span className="font-sans text-xs md:text-sm text-grey leading-none">.co</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#results" className="text-grey hover:text-green transition-colors text-sm font-medium">
            Results
          </Link>
          <Link href="#services" className="text-grey hover:text-green transition-colors text-sm font-medium">
            Services
          </Link>
          <Link href="#pricing" className="text-grey hover:text-green transition-colors text-sm font-medium">
            Pricing
          </Link>
          <Link
            href={LINKS.scheduleCall}
            className="bg-green text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex flex-col justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-foreground/98 backdrop-blur-lg border-t border-green/10 py-6 px-6 flex flex-col gap-6">
          <Link href="#results" className="text-grey hover:text-green font-medium" onClick={closeMobile}>Results</Link>
          <Link href="#services" className="text-grey hover:text-green font-medium" onClick={closeMobile}>Services</Link>
          <Link href="#pricing" className="text-grey hover:text-green font-medium" onClick={closeMobile}>Pricing</Link>
          <Link href={LINKS.scheduleCall} className="bg-green text-white px-6 py-3 rounded-full text-center font-semibold" onClick={closeMobile}>
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  )
}
