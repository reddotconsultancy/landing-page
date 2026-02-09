# 🚀 Complete Deployment Guide - Scalevirtual.co

## Quick Start (Fastest Way)

### Option 1: Deploy HTML Immediately (30 seconds)

1. **Upload to Vercel**
   ```bash
   # Upload scalevirtual-complete.html to Vercel
   vercel --prod
   ```

2. **Or use Netlify Drop**
   - Go to https://app.netlify.com/drop
   - Drag and drop `scalevirtual-complete.html`
   - Done! Your site is live

3. **Or GitHub Pages**
   - Rename file to `index.html`
   - Push to GitHub repo
   - Enable GitHub Pages
   - Live in 2 minutes

---

## Option 2: Full Next.js Setup (Production-Ready)

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

### Step-by-Step Installation

#### 1. Create Next.js Project
```bash
# Create project
npx create-next-app@latest scalevirtual --typescript --tailwind --app --use-npm

cd scalevirtual
```

#### 2. Install Dependencies
```bash
# Animation libraries
npm install gsap @studio-freight/lenis framer-motion

# 3D libraries
npm install three @react-three/fiber @react-three/drei

# Utilities
npm install react-intersection-observer
```

#### 3. Project Structure
```
scalevirtual/
├── public/
│   ├── logo.svg (your Main.svg)
│   └── icon.svg (your Icon_Main.svg)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Services.tsx
│   │   └── CTA.tsx
│   └── lib/
│       ├── lenis.ts
│       └── gsap-config.ts
├── package.json
└── next.config.js
```

#### 4. Configure Next.js

**next.config.js**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

**tailwind.config.ts**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#EEEAE3',
        foreground: '#F5F0E8',
        green: '#005E3E',
        grey: '#5A5959',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        cursive: ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 📦 GitHub Repository Setup

### 1. Initialize Git
```bash
git init
git add .
git commit -m "Initial commit: Scalevirtual landing page"
```

### 2. Create GitHub Repository
```bash
# Using GitHub CLI (fastest)
gh repo create scalevirtual --public --source=. --remote=origin --push

# Or manually
# 1. Go to github.com/new
# 2. Create repository "scalevirtual"
# 3. Run:
git remote add origin https://github.com/YOUR_USERNAME/scalevirtual.git
git branch -M main
git push -u origin main
```

### 3. Repository Structure
```
scalevirtual/
├── .github/
│   └── workflows/
│       └── deploy.yml (auto-deploy)
├── public/
├── src/
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

---

## 🌐 Vercel Deployment

### Method 1: One-Click Deploy (Recommended)

1. **Connect GitHub**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your `scalevirtual` repo
   - Click "Import"

2. **Configure**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Environment Variables: (none needed)

3. **Deploy**
   - Click "Deploy"
   - Wait 2 minutes
   - Done! 🎉

### Method 2: CLI Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Custom Domain Setup

1. **Add Domain in Vercel**
   - Project Settings → Domains
   - Add `scalevirtual.co`
   - Add `www.scalevirtual.co`

2. **Configure DNS**
   Update your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for SSL**
   - SSL certificate auto-generated
   - Usually takes 5-10 minutes
   - Your site is now live with HTTPS!

---

## 🎨 Customization Guide

### Update Colors
In `globals.css`:
```css
:root {
  --background: #EEEAE3;  /* Main background */
  --foreground: #F5F0E8;  /* Cards/sections */
  --green: #005E3E;        /* Brand color */
  --grey: #5A5959;         /* Text grey */
  --black: #000000;        /* Main text */
}
```

### Update Content
1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **Services**: Edit `src/components/Services.tsx`
3. **CTA**: Edit `src/components/CTA.tsx`

### Add New Section
```typescript
// src/components/NewSection.tsx
'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function NewSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.from('.new-section', {
      scrollTrigger: {
        trigger: '.new-section',
        start: 'top 80%',
      },
      y: 100,
      opacity: 0,
      duration: 1
    })
  }, [])

  return (
    <section className="new-section">
      {/* Your content */}
    </section>
  )
}
```

---

## ⚡ Performance Optimization

### 1. Image Optimization
```bash
# Install Sharp (auto-optimizes images)
npm install sharp
```

### 2. Code Splitting
Next.js automatically splits code. For manual:
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### 3. Lazy Loading
```typescript
'use client'
import { useInView } from 'react-intersection-observer'

export default function LazySection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div ref={ref}>
      {inView && <ExpensiveComponent />}
    </div>
  )
}
```

---

## 🐛 Troubleshooting

### Issue: Animations not smooth
**Solution**: Check GPU acceleration
```css
.animated-element {
  will-change: transform;
  transform: translateZ(0);
}
```

### Issue: Build fails
**Solution**: Check Node version
```bash
node --version  # Should be 18+
npm run build   # See specific error
```

### Issue: Smooth scroll not working
**Solution**: Verify Lenis setup
```typescript
// Make sure this is in layout.tsx or _app.tsx
useEffect(() => {
  const lenis = new Lenis()
  
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
}, [])
```

---

## 📊 Analytics Setup

### Google Analytics
```typescript
// src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🎯 Success Checklist

- [ ] HTML file works locally
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel connected to GitHub
- [ ] Site deployed successfully
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Mobile responsive tested
- [ ] Performance > 90 (Lighthouse)
- [ ] All animations smooth

---

## 📞 Support

**Issues?**
- Check browser console for errors
- Verify all CDN links are loading
- Test in incognito mode
- Clear cache and reload

**Need Help?**
- Documentation: https://nextjs.org/docs
- GSAP Docs: https://greensock.com/docs/
- Lenis: https://github.com/studio-freight/lenis

---

## 🚀 Next Steps

1. **Deploy immediately** using HTML file
2. **Test** on multiple devices
3. **Customize** content and colors
4. **Add** your own sections
5. **Optimize** for SEO
6. **Setup** analytics
7. **Launch** 🎉

**Estimated Time**: 30 minutes to 2 hours

Good luck with your launch! 🚀
