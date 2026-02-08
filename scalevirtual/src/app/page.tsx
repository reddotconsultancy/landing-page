'use client'

import { PageEntry } from '@/components/PageEntry'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { Results } from '@/components/Results'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { HowWeWork } from '@/components/HowWeWork'
import { Services } from '@/components/Services'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { ContactCTA } from '@/components/ContactCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <PageEntry>
      <Navigation />
      <Hero />
      <Testimonials />
      <Results />
      <WhyChooseUs />
      <HowWeWork />
      <Services />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
    </PageEntry>
  )
}
