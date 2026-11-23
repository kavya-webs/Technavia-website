# TECHNAVIA — Master Company, Product & Technical Knowledge Base

This document is the single source of truth for **TECHNAVIA**. Any AI assistant or developer working on this project must strictly adhere to the guidelines, architectural standards, and data recorded below.

---

## 1. Executive Summary & Brand Identity

* **Company Name**: TECHNAVIA
* **Author / Founder**: Kavya Mavani (`kavyamavaniweb@gmail.com`)
* **Official Contact**: `contact@technavia.com` (rendered with `whitespace-nowrap` so it never breaks mid-word)
* **Operational Model**: `Remote-First · Serving B2B Teams Worldwide`
* **Response Commitment**: Under 24-hour response directly by senior web architects (zero SDR layers or automated marketing drip funnels).
* **Core Positioning**: Premium B2B Web Engineering studio turning company websites into high-ranking Google assets, LLM-cited knowledge entities, and autonomous lead-to-CRM automation engines.
* **Core Value Proposition**: *"Turn your website into a Google, AI-search, and lead-automation engine in 21 days."*
* **Core Engineering Guarantees**:
  * **Speed**: Mobile Core Web Vitals guaranteed (95+ Lighthouse Performance, < 1.0s mobile LCP).
  * **Ownership**: 100% source code, GitHub repository, domain DNS, and workflow ownership (zero proprietary theme lock-in or recurring per-task taxes).
  * **Delivery**: Turnkey production launch in exactly 21 days across a 5-stage sprint methodology.

---

## 2. Design System & Visual Aesthetic

* **Theme Aesthetic**: Dark-tech / Obsidian HUD / Circuit-Trace with high-contrast neon accents.
* **Color Palette**:
  * **Deep Obsidian**: `#0B0D10` (Primary global background)
  * **Dark Charcoal**: `#14161A` (Cards, mockups, containers, and dropdown surfaces)
  * **Accent Surface**: `#0E1116` / `#12151B` (Inner card backgrounds and code plates)
  * **Neon Lime**: `#D4F542` (Primary active accent, glowing telemetry dots, active borders, and primary CTA buttons)
  * **Off-White**: `#F8F8F5` (Headlines and primary typography)
  * **Muted Slate / Zinc**: `#A8B0BC` / `white/70` (Secondary body copy, subtitles, and telemetry meta)
  * **Border Standard**: `1px solid #2A2F38` shifting to `#D4F542` on hover.
* **Typography**:
  * Headings: `font-tight` with negative letter-spacing (`tracking-[-0.04em]` / `tracking-tight`).
  * Telemetry & Numbers: `font-mono text-xs uppercase tracking-wider`.
  * Body: `font-sans` with high legibility.
* **Animations & Transitions**:
  * **Route Curtains**: Full-screen page-change transition curtains (`PageTransition.tsx`) MUST be preserved on route changes.
  * **Navbar Dynamic Scroll**: Transparent at the top (`scrollY <= 20px`), smoothly fading into `bg-[#0B0D10]/85 backdrop-blur-md border-b border-white/[0.08]` upon scrolling down.

---

## 3. Site Architecture & Route Directory

### Top Navigation (`src/components/layout/Navbar.tsx`)
Desktop maintains an exact 5-slot center navigation layout + right CTA pill:
1. **`Services ▾`** (`/services`):
   * `01 · Web Development + Technical SEO` (`/services/web-development-seo`)
   * `02 · LLM Visibility (AEO / GEO)` (`/services/llm-visibility`)
   * `03 · Custom AI Automations` (`/services/ai-automations`)
   * Sub-link: `Compare All Services & Retainers →` (`/services`)
2. **`Results`** (`/results`): Live production builds and self-hosted client mirrors.
3. **`Process`** (`/process`): 5-stage 21-day engineering timeline.
4. **`Blogs`** (`/blogs`): Actionable blueprints and technical insights.
5. **`Company ▾`** (`/about`):
   * `About TECHNAVIA` (`/about`)
   * `Contact` (`/contact`)
6. **Right CTA**: `Book a call` (`/book`)

### Mobile & Tablet Slide-Out Drawer (< 1024px)
Expandable accordions for `Services` and `Company`, keeping touch targets strictly `>= 44x44px`.

### Footer (`src/components/layout/Footer.tsx`)
* Headline: *"Websites engineered to rank on Google & AI."*
* `SERVICES`: All Services (`/services`), Web Dev + SEO (`/services/web-development-seo`), LLM Visibility (`/services/llm-visibility`), Custom AI Automations (`/services/ai-automations`).
* `COMPANY`: Results & Live Builds (`/results`), 21-Day Process (`/process`), Blueprints & Blogs (`/blogs`), About (`/about`), Contact (`/contact`).
* `CONTACT`: `contact@technavia.com`, `Remote-First · Serving B2B Teams Worldwide`, LinkedIn, X.

---

## 4. The 3 Core Service Systems

### 1. Web Development + Technical SEO (`/services/web-development-seo`)
* **Promise**: Sub-second Next.js builds engineered to rank on Google from day one.
* **Specs**: React 19 Server Components, zero client-side hydration bloat, semantic HTML5, Schema.org knowledge graphs (Organization, Service, WebSite), Hormozi conversion copy, 100% source code ownership.
* **Proof**: 3 real hosted builds (`Seravolve`, `TG media`, `COSMO SOLOR`).

### 2. LLM Visibility (AEO / GEO) (`/services/llm-visibility`)
* **Promise**: Get cited when high-intent B2B buyers search your category on ChatGPT, Gemini & Perplexity.
* **Specs**: 3-layer citation architecture (`Organization + Service JSON-LD Graph` → `Quotable Answer-Capsule Syntax` → `Bot Crawl Permissions & IndexNow`).

### 3. Custom AI Automations (`/services/ai-automations`)
* **Promise**: Sub-60s lead response, automated qualification, and zero busywork.
* **Specs**: Production n8n workflows, Clearbit/Apollo data enrichment, LLM ICP scoring, dynamic calendar booking links, two-way CRM sync (HubSpot/Salesforce), and Slack executive alerts.

---

## 5. Real Hosted Builds & Proof (Zero Placeholders)

1. **SERAVOLVE**
   * **Category**: D2C E-Commerce & Skincare (`WEB DEV + CRO`)
   * **URL**: `https://seravolve.com/`
   * **Specs**: 3-Step Hero Quiz Engine, Custom Routine Builder, Multi-Currency E-Commerce UX.
   * **Metric**: `+64% QUIZ-TO-CHECKOUT CONVERSION` | `< 1.0s LCP`.
2. **TG MEDIA**
   * **Category**: Growth & Marketing Agency (`MOTION UX + AUTOMATION`)
   * **URL**: `https://marketing-agency-neon.vercel.app/`
   * **Specs**: Interactive Video Reel Masonry, 3D Stacked Bento Grid, 42-second automated lead triage bus.
   * **Metric**: `+310% PIPELINE ENGAGEMENT` | `95+ Core Web Vitals`.
3. **COSMO SOLOR**
   * **Category**: Renewable Energy (`WEB & SEARCH ARCHITECTURE`)
   * **URL**: `https://concept-cosmoenergy.vercel.app/`
   * **Specs**: Interactive Stories Carousel, Scroll Blur-Reveal Type, Schema Entity Graph.
   * **Metric**: `< 0.6s LCP & COMMERCIAL LEADS` | `185% Inquiry Surge`.

*Note: All leftover references to fictional clients (e.g., "Apex SaaS", "Kinetix Studio", "Vanguard FinTech") have been permanently replaced.*

---

## 6. Technical Stack & Deployment Configuration

* **Framework**: Next.js 16.4.6 (App Router) + React 19 + TypeScript + Tailwind CSS 3.4.
* **Configuration File**: `next.config.mjs`
  * *Important*: Must remain `.mjs` (ES Module). Do NOT revert to `next.config.ts` because Linux environments with older glibc (e.g. Hostinger) fail to compile `.ts` config files with SWC.
* **Build Script**: `"build": "next build --webpack"`
  * *Important*: Next.js 16 defaults to Turbopack, which requires native Linux glibc >= 2.29. Hostinger uses WebAssembly fallback, which requires Webpack (`--webpack`).
* **Dependencies**: `typescript`, `@types/*`, `tailwindcss`, and `postcss` must stay inside `dependencies` (not `devDependencies`) so that production CI environments (such as Hostinger, which run `npm install --omit=dev`) have the compiler and CSS pipeline installed.
* **Git Repository**:
  * Origin: `https://github.com/kavya-webs/Technavia-website.git`
  * Author: `Kavya Mavani <kavyamavaniweb@gmail.com>`
  * Primary Branches:
    * `master`: Main development and Vercel production branch.
    * `main`: Hostinger production deployment branch.
  * Always sync both branches when pushing:
    ```bash
    git push origin master
    git push origin master:main
    ```

---

## 7. Strict Engineering Guidelines for AI Agents

1. **Preserve Visual Identity**: Never alter the core palette (`#0B0D10`, `#14161A`, `#D4F542`, `#F8F8F5`), font hierarchy, or dark HUD aesthetic.
2. **Do Not Touch Transition Curtains**: Keep `PageTransition.tsx` and route exit/enter curtains functional.
3. **Zero Horizontal Overflow**: Ensure `scrollWidth <= innerWidth` across 375px, 768px, 1024px, and 1440px viewports.
4. **Touch Targets**: All interactive elements (buttons, carousel arrows, accordion toggles, navigation pills) must have a minimum touch target size of `44x44px`.
5. **No Broken Badges or Squeezed Metrics**: All metric badges (e.g., `< 60s Lead Response Time`) must use `whitespace-nowrap`, non-breaking spaces `\u00A0`, and `shrink-0` to avoid awkward mid-word line breaks.
6. **Keep `next.config.mjs` and Webpack**: Never switch back to `next.config.ts` or standard `next build` (without `--webpack`), as this immediately breaks Hostinger builds.
