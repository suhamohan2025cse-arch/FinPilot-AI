# FinPilot AI — Marketing Homepage

Premium dark-theme SaaS homepage built with React + Vite + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  App.jsx                    – assembles all sections
  index.css                  – theme tokens, glass/gradient utilities
  components/
    Navbar.jsx                – sticky glass nav, mobile menu
    Hero.jsx                  – headline, CTAs, dashboard mock
    DashboardPreview.jsx      – signature animated product mock
    Features.jsx              – 6 feature cards grid
    FeatureCard.jsx           – reusable card w/ hover glow
    WhyFinPilot.jsx           – animated stat counters
    Workflow.jsx              – 4-step timeline
    CtaBand.jsx               – closing conversion panel
    Footer.jsx                – link columns + legal
    SectionHeading.jsx        – reusable eyebrow/title/description
```

## Design tokens (tailwind.config.js)

- Background: `#0B0B0F` (base), card `#15141D`, border `#242231`
- Accent gradient: violet `#7C5CFF` → cyan `#3FE0D0`
- Display font: Space Grotesk · Body: Inter · Mono/data: JetBrains Mono
- `glass` / `glass-card` utilities for the glassmorphism panels
