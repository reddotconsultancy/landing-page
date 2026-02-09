# Scalevirtual.co — Landing Page Plan (v2)
## Premium, Global, Conversion-Focused One-Page Experience

---

## 1. Design Direction & References

### Reference Matrix
| Reference | What to Take |
|-----------|--------------|
| **Red Dot Consultancy** | Centre-aligned layout, vertical flow, trust badges, clean section stacking |
| **ecombold.com** | Premium confidence, bold typography, image carousels, CTA hierarchy, conversion-first |
| **Canva Design** | 3D elements, motion, depth, modern visual language |
| **Google Doc Copy** | Exact text — do not change |

### Design Non-Negotiables
- **Not generic or cluttered** — avoid "Indian agency" style, busy gradients, too many icons
- **Premium, global, minimal, bold** — confident white space, strong hierarchy
- **Centre-aligned** — main content centred with generous side margins (similar to Red Dot)
- **Conversion-focused** — clear CTAs, trust signals, minimal friction to "Schedule a Call"

---

## 2. Exact Color Palette & Typography

### Colors (CSS Variables — use exactly)
```css
:root {
  --background: #EEEAE3;
  --foreground: #F5F0E8;
  --green: #005E3E;
  --grey: #5A5959;
  --black: #000000;
}
```

### Typography
- **Main font**: Poppins — Medium (500)
- **Cursive/accent font**: Times New Roman MT — Regular (italic where applicable)
- Strong hierarchy: large headings, clear body size, generous line-height (1.2–1.6)
- Confident spacing between sections

---

## 3. Tech Stack — Best-in-Class Tools

### Core Framework
- **Next.js 14+ (App Router)** — SSG, fast builds, SEO, image optimization

### Animation & Scroll
| Tool | Version | Purpose |
|------|---------|---------|
| **Lenis** | `lenis` (npm) | Smooth, velocity-based scrolling — primary scroll engine |
| **GSAP** | 3.12+ | ScrollTrigger, timelines, complex animations |
| **Framer Motion** | latest | React components, layout, whileInView |
| **Splitting.js** (optional) | latest | Text split/reveal effects (ecombold-style) |

### 3D & Motion
| Tool | Purpose |
|------|---------|
| **React Three Fiber + Drei** | 3D hero backgrounds, floating shapes, depth |
| **@react-spring/three** (optional) | Physics-based 3D motion |

### Utilities
- **react-intersection-observer** — lightweight scroll triggers
- **Sharp** — image optimization
- **next/image** — lazy loading, responsive images

### Package Commands
```bash
pnpm add gsap lenis framer-motion three @react-three/fiber @react-three/drei react-intersection-observer
```

---

## 4. Section Structure & Copy (Use Exactly)

### A. Navigation
- Logo (scalevirtual.co)
- Links: **Results** | **Services** | **Pricing** | **Schedule a Call**
- CTA: "Schedule a Call" (green button)

### B. Hero (Above-the-Fold)
- **Headline**: High-end Admin and Operations Support for Founders.
- **Subtext**: We run operations, accounting, sales, and marketing so you can focus on growth and leadership.
- **CTA**: Schedule a Meeting
- **Trust**: Rated 4.8 ⭐
- Visually striking — consider 3D floating shapes, subtle parallax

### C. Testimonials (Early)
- Section label: **Testimonials**
- Quote: "Lore impsum Lore impusm lorem ipsusm lorem ipsum Dolor"
- Attribution: Vaishnav, Abshar, Shan, Huda, Adam — And 15+ More Founders
- Logos: reddot, ytvidoes, Lumiya, Al Hana Services

### D. Results
- Section label: **Results**
- Image carousel — 15 images (rotating/sliding)
- Large rectangle layout, premium feel

### E. Why Choose Us
- Emphasise: **Dedicated one point of contact**
- Copy direction: clear ownership, accountability, no hand-off chaos

### F. How We Work
- **Circle/timeline**: Initial Meeting → Onboarding → Execution
- Points:
  - A dedicated point of contact
  - Clear ownership of responsibilities
  - Daily visibility into execution
  - Proactive follow-ups and planning

### G. Our Services
- Horizontal boxes (right-to-left scroll or grid)
- **Administrative**: Customer Service, Acquisitions, Data Entry, Human Resources, General Office Work
- **Sales**: Lead Generations, Cold Calling, Lead Nurturing, Lead Follow Up
- **Virtual Assistance**: Admin Assistance, Emailing, Scheduling, Social Media Management
- **Professionals**: Accounting, Bookkeeping, 3D Visualization, Web Development, Graphic Design, Video Editing
- **Marketing Support**: Content Creation, SEO Optimization, Paid Ads Management, Social Media Growth

### H. Pricing
- **Basic** — From $500/month  
  - Shared operational support, task-based execution, reactive follow-ups, limited proactive planning  
  - Best for: Founders who want coverage but still manage execution direction
- **Essential** — From $1000/month  
  - Dedicated execution bandwidth, sales/marketing follow-through, process cleanup, priority tasks, weekly planning  
  - Typical use: Sales ops, marketing execution, cross-team coordination
- **Advanced** (Most Chosen) — From $1500/month  
  - Fully embedded team, end-to-end ownership, founder inbox managed, daily visibility, proactive planning, systems that run without founder input  
  - Typical use: Founder-level offloading, business continuity, scale readiness

### I. FAQs
- Accordion or expandable format
- Use exact FAQ content from doc if provided

### J. Closing CTA
- Reuse hooks: "Admin and Ops stealing your hours?" / "If execution is slowing you down, it's time to delegate properly."
- Primary CTA: **Schedule a Call**

---

## 5. Layout & Visual Structure

### Centre-Aligned Layout
- Max content width: ~900–1100px
- Padding: 5–8% horizontal on desktop
- Sections stacked vertically with 6–10rem spacing
- All headings and body text centre-aligned (except services grid if horizontal)

### Above-the-Fold Priority
1. Logo + Nav + CTA
2. Main headline (large, bold)
3. Subtext (readable, grey)
4. Primary CTA button
5. Trust badge (4.8 ⭐)
6. Optional: subtle 3D/motion background

### Visual Hierarchy
- H1: 3.5–5rem, black, Poppins 700
- H2: 2–2.5rem, black
- Body: 1–1.2rem, grey
- Accent: green for links, CTAs, highlights
- Cursive: Times New Roman MT italic for selected phrases

---

## 6. Animation & Scroll Spec

### Principles
- **Fast, smooth, responsive** — no lag or delay
- **Fluid and premium** — not gimmicky
- **60fps** — use transforms and opacity only where possible
- **Scroll-based** — parallax, depth, section reveal

### Scroll Engine (Lenis)
```js
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 2,
})
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time))
```

### Section Reveals
- Trigger: `start: "top 85%"` — animate when section enters view
- Stagger: 0.1–0.2s between cards/elements
- Ease: `power3.out` or `power4.out`
- Properties: `y: 40–80`, `opacity: 0 → 1`

### Parallax & Depth
- Hero background: subtle Y parallax (slower than foreground)
- Cards: light 3D tilt on hover
- Images: slight scale on scroll (optional)

### 3D Elements (Canva-inspired)
- Floating shapes in hero (blurred circles, soft gradients)
- Optional: React Three Fiber scene with abstract geometry
- Keep 3D performant — prefer CSS/SVG where possible

---

## 7. File Architecture

```
scalevirtual/
├── public/
│   ├── logo.svg
│   ├── icon.svg
│   └── images/           # 15 results images + testimonial logos
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero3D.tsx
│   │   ├── Testimonials/
│   │   ├── Results/         # Image carousel
│   │   ├── WhyChooseUs/
│   │   ├── HowWeWork/
│   │   ├── Services/
│   │   ├── Pricing/
│   │   ├── FAQ/
│   │   └── Footer/
│   ├── lib/
│   │   ├── lenis.ts
│   │   ├── gsap-config.ts
│   │   └── animations.ts
│   ├── hooks/
│   │   ├── useLenis.ts
│   │   └── useScrollAnimation.ts
│   └── styles/
│       └── variables.css
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 8. Implementation Phases

### Phase 1 — Foundation (Day 1)
- [ ] Next.js + Tailwind + layout
- [ ] Lenis smooth scroll + GSAP ScrollTrigger
- [ ] Design tokens (colors, fonts)
- [ ] Navigation + Hero (static)

### Phase 2 — Sections & Copy (Day 2–3)
- [ ] All sections with exact copy
- [ ] Centre-aligned layout
- [ ] Results image carousel (15 images)
- [ ] Services grid (horizontal/scroll)
- [ ] Pricing cards

### Phase 3 — Animations (Day 4–5)
- [ ] Section scroll reveals
- [ ] Hero entrance + 3D/shapes
- [ ] Parallax layers
- [ ] Button hover/magnetic effects

### Phase 4 — Polish & Performance (Day 6)
- [ ] Image optimization
- [ ] Lighthouse 95+
- [ ] Mobile responsive
- [ ] Cross-browser check

### Phase 5 — Deploy (Day 7)
- [ ] Vercel + domain
- [ ] Analytics (optional)

---

## 9. Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Lighthouse Performance | 95+ |
| Animation frame rate | 60fps |

---

## 10. Output Checklist

- [ ] Single one-page, conversion-focused landing page
- [ ] Visually striking above-the-fold
- [ ] Seamless scroll experience
- [ ] Consistent design language
- [ ] Exact copy, colors, fonts from spec
- [ ] No content, color, or font changes from references

---

**References**
- [Red Dot Consultancy](https://reddotconsultancy.co) — layout
- [ecombold.com](https://ecombold.com) — vibe
- [Canva Design](https://www.canva.com/design/DAG-W93mV-o/...) — 3D/motion
- [Google Doc Copy](https://docs.google.com/document/d/1Enugi2FB22rgKABDP_pZGGCJ2Xt53Q7P2eFbNk4HUHA/edit) — text
