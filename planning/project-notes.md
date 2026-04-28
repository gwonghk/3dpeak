# 3dpeak / PeakLab Project Notes

## Overview
Product webpage for 3D printed items (portfolio/showcase — no cart/checkout)

## Brand
- **Name:** PeakLab
- **Tagline:** "3D printed curiosities from Canada."
- **URL:** https://3dpeak.ca

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (class-based dark mode)

## Completed ✅

- [x] Project folder created
- [x] Requirements gathered (5 pages: Home, Products, About, FAQ, Contact)
- [x] Tech stack selected (Next.js + TypeScript + Tailwind)
- [x] Scaffolding complete
- [x] Core pages built
- [x] Components abstracted (PageHeader, Button, Cards, ContactForm, ThemeProvider)
- [x] Data layer added (types + data files)
- [x] Accessibility improvements (ARIA on FAQ, form labels, keyboard nav)
- [x] Dark mode toggle (toggle works, theme state persists via localStorage)
- [x] Material 3 palette migration (Sunflower Gold + Alice Blue + Fiery Terracotta)
- [x] Design tokens + semantic color system in `globals.css`
- [x] Email subscription feature (Buttondown API)
  - API route: `src/app/api/subscribe/route.ts`
  - Component: `src/components/SubscribeForm.tsx`
  - Dedicated page: `/subscribe`
  - Inline form on home page (below hero)
- [x] i18n infrastructure
  - Locales: en, fr, zh-CN, zh-TW
  - `I18nProvider` context with `useTranslation()` hook
  - Translation files in `src/i18n/`
  - Language toggle in footer
- [x] SEO (OG tags, sitemap, robots.txt)

## In Progress 🔄

- [ ] Dark mode — toggle works but Tailwind v4 class-based dark mode not fully wired (CSS variables work, but `dark:` utility overrides need verification in browser)
- [ ] i18n — infrastructure ready but pages still use hardcoded English strings; need `t()` calls throughout

## Still To Do 📋

- [ ] Contact form backend (Formspree/Resend/etc)
- [ ] Real product data + images
- [ ] Dark mode verification in browser
- [ ] i18n: wire up all `t()` calls (see `TODO.md` in root)
- [ ] Animation/interaction pass (see `planning/TODO.md`)
- [ ] Deployment (Vercel or other)

## Project Structure
```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Root layout
│   ├── products/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx   # Product detail (SSG)
│   ├── about/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── subscribe/page.tsx
│   ├── api/subscribe/route.ts
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageHeader.tsx
│   ├── Button.tsx
│   ├── ProductCard.tsx
│   ├── InfoCard.tsx
│   ├── ContactForm.tsx
│   ├── SubscribeForm.tsx
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageToggle.tsx
│   ├── NavLink.tsx
│   ├── ImageCarousel.tsx
│   ├── ProductGallery.tsx
│   ├── ProductInfo.tsx
│   ├── ProductSpecs.tsx
│   ├── ModelViewer.tsx
│   ├── ModelBadge.tsx
│   └── ErrorView.tsx
├── data/
│   ├── navLinks.ts
│   ├── products.ts
│   ├── faqs.ts
│   └── home-content.ts
├── i18n/
│   ├── locales.ts
│   ├── loader.ts
│   ├── I18nProvider.tsx
│   ├── en.json
│   ├── fr.json
│   ├── zh-CN.json
│   └── zh-TW.json
├── config/
│   └── brand.ts
├── types/
│   └── model-viewer.d.ts
└── app/globals.css
```

## Key Decisions

- Brand name changed from "PeakCraft" to "PeakLab" (2026-04-28)
- Plain HTML/CSS first approach abandoned — went with Next.js + TypeScript per user request
- Dark mode uses `class="dark"` on `<html>` with localStorage persistence via `ThemeProvider`
- Color system migrated to Material 3 semantic tokens (2026-04-28)
- Email subscriptions handled via **Buttondown** (API key in `.env.local`)
- i18n approach: simple JSON + React context (no `next-intl`) — lightweight, no routing change
- Language toggle placed in footer; navbar shows only ThemeToggle
- Translation files are dynamic imports loaded lazily per locale

## Known Issues

- Contact form not connected to real backend
- Dark mode needs browser verification
- i18n infrastructure is live but not yet wired to page content
- `@ts-expect-error` needed in `ModelViewer.tsx` (ESLint fix pending)

---

*Updated: 2026-04-28*
