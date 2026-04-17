# 3dpeak Color Palette

## peach-glow
| Token | Hex | Use |
|---|---|---|
| peach-glow-50 | #fff1e5 | |
| peach-glow-100 | #ffe2cc | Banner light bg |
| peach-glow-200 | #ffc599 | |
| peach-glow-300 | #ffa866 | |
| peach-glow-400 | #ff8b33 | |
| peach-glow-500 | #ff6e00 | **Banner / hero** |
| peach-glow-600 | #cc5800 | Banner dark |
| peach-glow-700 | #994200 | |
| peach-glow-800 | #662c00 | |
| peach-glow-900 | #331600 | |
| peach-glow-950 | #240f00 | |

## frozen-water
| Token | Hex | Use |
|---|---|---|
| frozen-water-50 | #eafaf9 | |
| frozen-water-100 | #d6f5f3 | Secondary light bg |
| frozen-water-200 | #acece7 | |
| frozen-water-300 | #83e2dc | |
| frozen-water-400 | #5ad8d0 | |
| frozen-water-500 | #30cfc4 | **Secondary** (accents, category tags) |
| frozen-water-600 | #27a59d | Secondary dark |
| frozen-water-700 | #1d7c76 | |
| frozen-water-800 | #13534e | |
| frozen-water-900 | #0a2927 | |
| frozen-water-950 | #071d1b | |

## floral-white
| Token | Hex | Use |
|---|---|---|
| floral-white-50 | #fff3e5 | **Page background** |
| floral-white-100 | #ffe7cc | Surface alt bg |
| floral-white-200 | #ffcf99 | |
| floral-white-300 | #ffb866 | |
| floral-white-400 | #ffa033 | |
| floral-white-500 | #ff8800 | |
| floral-white-600 | #cc6d00 | |
| floral-white-700 | #995200 | |
| floral-white-800 | #663600 | |
| floral-white-900 | #331b00 | |
| floral-white-950 | #241300 | |

## ink-black
| Token | Hex | Use |
|---|---|---|
| ink-black-50 | #e5fffe | |
| ink-black-100 | #ccfffc | |
| ink-black-200 | #99fffa | Borders |
| ink-black-300 | #66fff7 | |
| ink-black-400 | #33fff5 | |
| ink-black-500 | #00fff2 | Accent |
| ink-black-600 | #00ccc2 | Text muted |
| ink-black-700 | #009991 | Text muted dark |
| ink-black-800 | #006661 | Footer text |
| ink-black-900 | #003330 | **Body text** |
| ink-black-950 | #002422 | |

## twitter-blue
| Token | Hex | Use |
|---|---|---|
| twitter-blue-50 | #e5f5ff | Button light bg |
| twitter-blue-100 | #ccebff | Button light |
| twitter-blue-200 | #99d8ff | |
| twitter-blue-300 | #66c4ff | |
| twitter-blue-400 | #33b1ff | |
| twitter-blue-500 | #009dff | **Buttons** |
| twitter-blue-600 | #007ecc | Button dark |
| twitter-blue-700 | #005e99 | |
| twitter-blue-800 | #003f66 | |
| twitter-blue-900 | #001f33 | |
| twitter-blue-950 | #001624 | |

---

## Semantic Aliases

**Change these in `src/app/globals.css` → `@theme` to shift the entire site's color scheme.**

| Alias | Current value | Purpose |
|---|---|---|
| `--color-primary` | `twitter-blue-500` | Buttons, CTAs |
| `--color-primary-dark` | `twitter-blue-600` | Button hover |
| `--color-primary-light` | `twitter-blue-100` | Button light bg |
| `--color-text` | `ink-black-900` | Body text |
| `--color-text-muted` | `ink-black-700` | Secondary text |
| `--color-text-light` | `ink-black-500` | Accent text |
| `--color-banner` | `peach-glow-500` | Hero, page headers |
| `--color-banner-dark` | `peach-glow-600` | Banner hover |
| `--color-banner-light` | `peach-glow-100` | Banner light bg |
| `--color-secondary` | `frozen-water-500` | Category tags, accents |
| `--color-secondary-dark` | `frozen-water-600` | Secondary hover |
| `--color-secondary-light` | `frozen-water-100` | Secondary light bg |
| `--color-bg` | `floral-white-50` | Page background |
| `--color-surface` | `#ffffff` | Cards, nav, footer |
| `--color-surface-alt` | `floral-white-100` | Alternate surface |
| `--color-border` | `ink-black-200` | Borders, dividers |

---

## Where Each Color Is Used

| Color | Used in |
|---|---|
| **twitter-blue** (primary) | All buttons (primary variant), form focus rings, FAQ toggle indicator |
| **peach-glow** (banner) | Hero section, PageHeader, Products/FAQ callout banners, Navbar/Footer brand name |
| **ink-black** (text) | All body text, muted text for descriptions, form labels |
| **frozen-water** (secondary) | Product category tags, "custom project" about section, theme toggle hover |
| **floral-white** | Page background (`bg-bg`), alternate surface areas |
| **white** | Card backgrounds, button text (primary), Navbar bg |
| **ink-black** (footer) | Footer background (ink-black-900), footer text |

---

## Brand

`src/config/brand.ts` — single source of truth for brand name and tagline.
