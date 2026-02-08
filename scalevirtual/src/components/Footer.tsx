'use client'

import { LINKS, SVG_PATHS } from '@/lib/constants'

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-24 px-6 md:px-10 bg-foreground border-t border-green/10 relative overflow-hidden"
    >
      {/* Large decorative icon on the right, similar to reference design */}
      <div className="pointer-events-none select-none absolute -bottom-28 right-[-140px] w-[460px] opacity-20">
        <img
          src={SVG_PATHS.icon}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10 flex flex-col items-start text-left">
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="font-serif italic text-lg md:text-xl text-black leading-none">
              scale
            </span>
            <span className="font-sans font-semibold text-lg md:text-xl text-green leading-none">
              virtual
            </span>
            <span className="font-sans text-xs md:text-sm text-grey leading-none">
              .co
            </span>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Anything Else On Your Mind?
        </h2>
        <p className="text-grey text-lg mb-8">
          Leave us a message on WhatsApp
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8">
          <a
            href={LINKS.contactUs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </a>
          <a
            href={LINKS.bookCall}
            className="inline-block border-2 border-green text-green px-10 py-5 rounded-full text-lg font-semibold hover:bg-green hover:text-white transition-all duration-300"
          >
            Book a Call
          </a>
        </div>
        <a
          href={LINKS.email}
          className="text-grey hover:text-green transition-colors text-sm mb-6"
        >
          Email – scalevirtual.co@gmail.com
        </a>
        <p className="mt-4 text-grey text-sm">
          © 2026 Scalevirtual. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
