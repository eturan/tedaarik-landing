# Video Showcase — Product Demo Videos on Landing Pages

**Date:** 2026-04-09
**Status:** Draft
**Goal:** Add 3 YouTube product demo videos to both landing page variants (A and B) to reduce bounce rate and increase signups by showing the product in action before the calculator funnel.

## Videos

| Video | YouTube ID | Feature Mapping |
|-------|-----------|-----------------|
| Fatura Yükleme ve Otomatik Veri Analizi | `d-Elwu_IUbg` | F1: Invoice Digitization & Cost Tracking |
| Malzemeler ve Birim Maliyet Takibi | `ZpI--PCy-rQ` | F2: Materials & Unit Cost (maps to Price Comparison feature) |
| Reçete ve Menü Yönetimi \| AI Maliyet Analizi | `wfJ5q-NdAyI` | F3: Recipe & Menu Management |

**Language:** Turkish only. Shown to all visitors (visual demos communicate value regardless of audio language). Localized titles and descriptions wrap each video.

## Strategy: Pain → Proof → Payoff

Current flow: PainPoints → Calculator → Features

New flow: PainPoints → **VideoShowcase (new)** → Calculator → Features **(with videos replacing screenshots)**

Videos appear twice: first as discovery (showcase section), then as contextual reinforcement (features section).

## New Components

### LazyYouTube (`src/components/LazyYouTube.tsx`)

Reusable lazy-loading YouTube embed used in both VideoShowcase and Features.

**Behavior:**
1. Renders YouTube thumbnail image (`https://img.youtube.com/vi/{id}/maxresdefault.jpg`) with a centered play button overlay
2. On click: replaces thumbnail with YouTube iframe (`autoplay=1`, `rel=0`)
3. Fires PostHog `video_played` event

**Props:**
- `videoId: string` — YouTube video ID
- `title: string` — accessible title for the iframe
- `className?: string` — additional CSS classes
- `onPlay?: () => void` — callback when play is triggered

Always renders 16:9 aspect ratio (`aspect-video`).

**Implementation notes:**
- Uses React state to toggle between thumbnail and iframe
- Thumbnail: `<img>` with `loading="lazy"` attribute
- Play button: absolutely positioned white circle with CSS triangle, `cursor-pointer`
- Duration badge: absolutely positioned bottom-right, dark background
- Iframe: YouTube embed with `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"`
- Transition: simple opacity crossfade (150ms)

### VideoShowcase (`src/components/VideoShowcase.tsx`)

New section for variant A, placed between PainPoints and Calculator.

**Layout:**
- Section background: `bg-slate-50` (light gray)
- Padding: `py-20 px-4 sm:px-6 lg:px-8`
- Max width: `max-w-7xl mx-auto`
- Section heading: centered title + subtitle
- 3-card grid: `grid grid-cols-1 md:grid-cols-3 gap-6`
- Bridge CTA below grid: teal button "Tasarrufunu Hesapla →" that scrolls to `#calculator`

**Card design:**
- White background, `rounded-xl`, subtle shadow (`shadow-md`)
- Top: `LazyYouTube` component (16:9 aspect ratio)
- Bottom: 12px padding, colored dot + title + one-line description
- Hover: slight lift (`hover:shadow-lg`, `hover:-translate-y-1`) with `transition-all duration-200`
- Framer Motion: fade-in-up on scroll, staggered per card

**Bridge CTA:**
- Teal background button with arrow icon
- `onClick` scrolls to `#calculator` with smooth behavior
- PostHog tracking: `trackCtaClicked('video-showcase-cta', 'video-showcase')`

### VideoShowcaseB (`src/components/b/VideoShowcaseB.tsx`)

Same as VideoShowcase but:
- Uses `useBLanguage` hook instead of `useLanguage`
- Bridge CTA uses rose-500 color instead of teal
- PostHog variant tracking passes `'b'` instead of `'a'`

## Modified Components

### Features.tsx and FeaturesB.tsx

**Removed:**
- 6 static image imports (3 EN + 3 TR)
- `ImageWithFallback` component usage
- Language-conditional image selection (`isTr ? trImage : enImage`)
- `aspect-[4/3]` container

**Added:**
- `LazyYouTube` import
- `videoId` field in each feature object (hardcoded YouTube IDs)
- `LazyYouTube` component in place of `ImageWithFallback`
- `aspect-video` (16:9) container replaces `aspect-[4/3]`
- PostHog `onPlay` callback per feature

### Index.tsx

Add import and render `<VideoShowcase />` between `<PainPoints />` and `<Calculator />`.

### IndexB.tsx

Add import and render `<VideoShowcaseB />` between `<PainPointsB />` and `<CalculatorB />`.

### i18n.ts

Add `videoShowcase` key to both `en` and `tr` translations:

**Turkish:**
```
videoShowcase: {
  title: 'Ürünü Keşfedin',
  subtitle: 'Her özelliği kısa videolarla tanıyın',
  v1: {
    title: 'Fatura Yükleme ve Veri Analizi',
    desc: 'Faturalarınızı yükleyin, yapay zeka verileri otomatik çıkarsın'
  },
  v2: {
    title: 'Malzemeler ve Birim Maliyet',
    desc: 'Malzeme fiyatlarını takip edin, birim maliyetleri karşılaştırın'
  },
  v3: {
    title: 'Reçete ve Menü Yönetimi',
    desc: 'AI destekli reçete maliyeti hesaplama ve menü optimizasyonu'
  },
  cta: 'Tasarrufunu Hesapla'
}
```

**English:**
```
videoShowcase: {
  title: 'See It In Action',
  subtitle: 'Watch short demos of each feature',
  v1: {
    title: 'Invoice Upload & Data Analysis',
    desc: 'Upload your invoices and let AI extract the data automatically'
  },
  v2: {
    title: 'Materials & Unit Cost Tracking',
    desc: 'Track ingredient prices and compare unit costs across suppliers'
  },
  v3: {
    title: 'Recipe & Menu Management',
    desc: 'AI-powered recipe costing and menu optimization'
  },
  cta: 'Estimate Your Savings'
}
```

### posthog.ts

Add new event:

```typescript
VIDEO_PLAYED: 'video_played'
```

Add helper:

```typescript
export function trackVideoPlayed(data: {
  videoId: string;
  title: string;
  location: 'video-showcase' | 'features';
  variant: 'a' | 'b';
}) {
  capture(EVENTS.VIDEO_PLAYED, data);
}
```

## Page Flow After Changes

### Variant A (Index.tsx)
```
Navigation → Hero → LogoBelt → PainPoints → **VideoShowcase** → Calculator → Features (with videos) → HowItWorks → Pricing → FAQ → CTA → Footer
```

### Variant B (IndexB.tsx)
```
ScrollProgress → NavigationB → HeroB → LogoBelt → PainPointsB → **VideoShowcaseB** → CalculatorB → FeaturesB (with videos) → HowItWorksB → PricingB → FAQB → CTAB → Footer
```

## Performance

- **No YouTube iframes on initial load.** LazyYouTube renders only a thumbnail (`<img>`) and a CSS play button until the user clicks.
- **Thumbnail loading:** Uses `loading="lazy"` on `<img>` tags. Only thumbnails in/near the viewport load.
- **Iframe load:** Single iframe per click. YouTube's embed is ~500KB; this cost is deferred until user interaction.
- **No new npm dependencies.**

## Analytics

| Event | When | Properties |
|-------|------|------------|
| `video_played` | User clicks play on any video | `videoId`, `title`, `location` (video-showcase / features), `variant` (a / b) |
| `cta_clicked` | User clicks bridge CTA below videos | `button_text`, `location` (video-showcase) |

## Mobile Behavior

- VideoShowcase grid: 3 columns on desktop (md+), 1 column stacked on mobile
- Play button: 48px on desktop, 56px on mobile for WCAG touch target compliance
- Cards stack vertically with 16px gap
- Bridge CTA: full-width on mobile

## Files Changed Summary

| File | Action |
|------|--------|
| `src/components/LazyYouTube.tsx` | **Create** |
| `src/components/VideoShowcase.tsx` | **Create** |
| `src/components/b/VideoShowcaseB.tsx` | **Create** |
| `src/components/Features.tsx` | **Modify** — replace images with LazyYouTube |
| `src/components/b/FeaturesB.tsx` | **Modify** — replace images with LazyYouTube |
| `src/pages/Index.tsx` | **Modify** — add VideoShowcase |
| `src/pages/IndexB.tsx` | **Modify** — add VideoShowcaseB |
| `src/i18n.ts` | **Modify** — add videoShowcase translations |
| `src/lib/posthog.ts` | **Modify** — add VIDEO_PLAYED event |
