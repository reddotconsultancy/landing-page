import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { ScrollProgress } from '@/components/ScrollProgress'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Scalevirtual.co — High-end Admin and Operations Support for Founders',
  description: 'We run operations, accounting, sales, and marketing so you can focus on growth and leadership.',
  keywords: ['virtual assistant', 'operations', 'founders', 'admin support', 'business scaling'],
  openGraph: {
    title: 'Scalevirtual.co — High-end Admin and Operations Support for Founders',
    description: 'We run operations, accounting, sales, and marketing so you can focus on growth and leadership.',
    url: 'https://scalevirtual.co',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-background text-black antialiased">
        <SmoothScroll />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
