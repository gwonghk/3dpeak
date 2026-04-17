# 3dpeak / PeakCraft Project Notes

## Overview
Product webpage for 3D printed items (portfolio/showcase — no cart/checkout)

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Status
- [x] Project folder created
- [x] Requirements gathered (5 pages: Home, Products, About, FAQ, Contact)
- [x] Tech stack selected (Next.js + TypeScript + Tailwind)
- [x] Scaffolding complete
- [x] Core pages built
- [x] Components abstracted (PageHeader, Button, Cards, ContactForm, ThemeProvider)
- [x] Data layer added (types + data files)
- [x] Accessibility improvements (ARIA on FAQ, form labels, keyboard nav)
- [x] Dark mode toggle (toggle works, theme state persists via localStorage)
- [ ] Real product data + images
- [ ] Contact form backend (Formspree/Resend/etc)
- [ ] SEO (OG tags, sitemap, robots.txt)
- [ ] Custom 404 page
- [ ] Deployment

## Project Structure
```
src/
├── app/
│   ├── page.tsx           # Home
│   ├── layout.tsx         # Root layout
│   ├── products/page.tsx
│   ├── about/page.tsx
│   ├── faq/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageHeader.tsx
│   ├── Button.tsx
│   ├── Cards.tsx          (ProductCard + InfoCard)
│   ├── ContactForm.tsx
│   └── ThemeProvider.tsx
├── data/
│   ├── navLinks.ts
│   ├── products.ts
│   └── faqs.ts
└── app/globals.css
```

## Key Decisions
- Plain HTML/CSS first approach abandoned — went with Next.js + TypeScript per user request
- Dark mode uses `class="dark"` on `<html>` with localStorage persistence
- Contact form simulates submission (no real backend yet)
- Products and FAQ data in typed data files, not hardcoded in pages

## Known Issues
- Dark mode toggle not fully wired (Tailwind v4 class-based dark mode needs setup)
- No custom 404 page yet
- Contact form not connected to real backend

---

*Updated: 2026-04-15*