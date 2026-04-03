# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tedaarik landing page — a bilingual (Turkish/English) marketing site for a restaurant supply chain SaaS product. Built with Vite + React + TypeScript + Tailwind CSS + shadcn/ui. Originally scaffolded via Lovable.

## Commands

```bash
npm run dev        # Dev server on port 8080
npm run build      # Production build (outputs to dist/)
npm run build:dev  # Dev-mode build
npm run lint       # ESLint
npm run preview    # Preview production build
```

No test runner is configured yet.

## Architecture

### Routing & Pages
Single-page app using `react-router-dom` (client-side routing in `src/App.tsx`). Pages map to Turkish URL slugs for legal pages (`/gizlilik-politikasi`, `/kullanim-sartlari`, etc.) plus `/blog` and `/blog/:slug`.

The landing page (`src/pages/Index.tsx`) composes section components: Hero, PainPoints, Calculator, Features, HowItWorks, Testimonials, Pricing, FAQ, CTA.

### i18n
Custom i18n via `src/i18n.ts` — a single `translations` object with `en` and `tr` keys. No framework (no i18next). Access translations via the `useLanguage()` hook from `src/contexts/LanguageContext.tsx`. Default language is Turkish.

### Blog
Markdown files in `src/content/blog/` with YAML frontmatter. Parsed at build time via `import.meta.glob` in `src/lib/blog.ts` (custom frontmatter parser, no gray-matter at runtime). Blog types defined in `src/types/blog.ts`.

### UTM & Analytics
- `src/lib/utm.ts` — captures UTM params and click IDs from URL on page load, stores in sessionStorage, appends to signup links via `buildSignupUrl()`.
- `src/lib/posthog.ts` — PostHog analytics wrapper (loaded via `index.html` script tag). Type-safe event helpers for CTA clicks, form submissions, blog views.

### Path Alias
`@` maps to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

### Signup Links
All "Start Free Trial" CTAs link to the external app signup. Use `buildSignupUrl()` from `src/lib/utm.ts` to preserve UTM attribution when constructing signup URLs.

## gstack

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available skills: `/office-hours`, `/plan-ceo-review`, `/plan-eng-review`, `/plan-design-review`, `/design-consultation`, `/design-shotgun`, `/design-html`, `/review`, `/ship`, `/land-and-deploy`, `/canary`, `/benchmark`, `/browse`, `/connect-chrome`, `/qa`, `/qa-only`, `/design-review`, `/setup-browser-cookies`, `/setup-deploy`, `/retro`, `/investigate`, `/document-release`, `/codex`, `/cso`, `/autoplan`, `/careful`, `/freeze`, `/guard`, `/unfreeze`, `/gstack-upgrade`, `/learn`

## Skill routing

When the user's request matches an available skill, ALWAYS invoke it using the Skill
tool as your FIRST action. Do NOT answer directly, do NOT use other tools first.
The skill has specialized workflows that produce better results than ad-hoc answers.

Key routing rules:
- Product ideas, "is this worth building", brainstorming → invoke office-hours
- Bugs, errors, "why is this broken", 500 errors → invoke investigate
- Ship, deploy, push, create PR → invoke ship
- QA, test the site, find bugs → invoke qa
- Code review, check my diff → invoke review
- Update docs after shipping → invoke document-release
- Weekly retro → invoke retro
- Design system, brand → invoke design-consultation
- Visual audit, design polish → invoke design-review
- Architecture review → invoke plan-eng-review
