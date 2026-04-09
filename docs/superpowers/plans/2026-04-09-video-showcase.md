# Video Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 YouTube product demo videos to both landing page variants to increase signups — a new VideoShowcase section between PainPoints and Calculator, plus replace static images in Features with video embeds.

**Architecture:** A shared `LazyYouTube` component handles the thumbnail-to-iframe lazy loading pattern. Two new section components (`VideoShowcase`, `VideoShowcaseB`) render a 3-card video grid. Features sections are modified to use `LazyYouTube` instead of static images. Translations and analytics are updated to support the new content.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, PostHog (existing stack — no new dependencies)

---

### Task 1: Add PostHog VIDEO_PLAYED event

**Files:**
- Modify: `src/lib/posthog.ts`

- [ ] **Step 1: Add VIDEO_PLAYED to EVENTS constant**

In `src/lib/posthog.ts`, add `VIDEO_PLAYED` to the `EVENTS` object (after line 22, before `} as const`):

```typescript
// In the EVENTS object, after SIGNUP_CTA_CLICKED:
  SIGNUP_CTA_CLICKED: 'signup_cta_clicked',
  VIDEO_PLAYED: 'video_played',
} as const;
```

- [ ] **Step 2: Add trackVideoPlayed helper**

After the `trackSignupCtaClicked` function (after line 86), add:

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

- [ ] **Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/posthog.ts
git commit -m "feat: add VIDEO_PLAYED PostHog event and trackVideoPlayed helper"
```

---

### Task 2: Add i18n translations for videoShowcase

**Files:**
- Modify: `src/i18n.ts`

This task adds the `videoShowcase` translation key to all 4 translation objects: `translations.en`, `translations.tr`, `translationsB.en`, and `translationsB.tr`.

- [ ] **Step 1: Add videoShowcase to `translations.en`**

In `src/i18n.ts`, after the `features` block closes (after line 118 — the closing `}` of `features`), add the `videoShowcase` key:

```typescript
    // After features: { ... },
    videoShowcase: {
      title: 'See It In Action',
      subtitle: 'Watch short demos of each feature',
      v1: {
        title: 'Invoice Upload & Data Analysis',
        desc: 'Upload your invoices and let AI extract the data automatically',
      },
      v2: {
        title: 'Materials & Unit Cost Tracking',
        desc: 'Track ingredient prices and compare unit costs across suppliers',
      },
      v3: {
        title: 'Recipe & Menu Management',
        desc: 'AI-powered recipe costing and menu optimization',
      },
      cta: 'Estimate Your Savings',
    },
```

- [ ] **Step 2: Add videoShowcase to `translations.tr`**

In the `tr` section, after the `features` block closes (after the closing `}` of `tr.features`, around line 312), add:

```typescript
    videoShowcase: {
      title: 'Ürünü Keşfedin',
      subtitle: 'Her özelliği kısa videolarla tanıyın',
      v1: {
        title: 'Fatura Yükleme ve Veri Analizi',
        desc: 'Faturalarınızı yükleyin, yapay zeka verileri otomatik çıkarsın',
      },
      v2: {
        title: 'Malzemeler ve Birim Maliyet',
        desc: 'Malzeme fiyatlarını takip edin, birim maliyetleri karşılaştırın',
      },
      v3: {
        title: 'Reçete ve Menü Yönetimi',
        desc: 'AI destekli reçete maliyeti hesaplama ve menü optimizasyonu',
      },
      cta: 'Tasarrufunu Hesapla',
    },
```

- [ ] **Step 3: Add videoShowcase to `translationsB.en`**

In `translationsB.en`, after the `features` block closes (after line 500), add:

```typescript
    videoShowcase: {
      title: 'See It In Action',
      subtitle: 'Watch short demos of each feature',
      v1: {
        title: 'Invoice Upload & Data Analysis',
        desc: 'Upload your invoices and let AI extract the data automatically',
      },
      v2: {
        title: 'Materials & Unit Cost Tracking',
        desc: 'Track ingredient prices and compare unit costs across suppliers',
      },
      v3: {
        title: 'Recipe & Menu Management',
        desc: 'AI-powered recipe costing and menu optimization',
      },
      cta: 'Estimate Your Savings',
    },
```

- [ ] **Step 4: Add videoShowcase to `translationsB.tr`**

In `translationsB.tr`, after the `features` block closes (after line 659), add:

```typescript
    videoShowcase: {
      title: 'Ürünü Keşfedin',
      subtitle: 'Her özelliği kısa videolarla tanıyın',
      v1: {
        title: 'Fatura Yükleme ve Veri Analizi',
        desc: 'Faturalarınızı yükleyin, yapay zeka verileri otomatik çıkarsın',
      },
      v2: {
        title: 'Malzemeler ve Birim Maliyet',
        desc: 'Malzeme fiyatlarını takip edin, birim maliyetleri karşılaştırın',
      },
      v3: {
        title: 'Reçete ve Menü Yönetimi',
        desc: 'AI destekli reçete maliyeti hesaplama ve menü optimizasyonu',
      },
      cta: 'Tasarrufunu Hesapla',
    },
```

- [ ] **Step 5: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
git add src/i18n.ts
git commit -m "feat: add videoShowcase translations for all 4 locale variants"
```

---

### Task 3: Create LazyYouTube component

**Files:**
- Create: `src/components/LazyYouTube.tsx`

- [ ] **Step 1: Create the LazyYouTube component**

Create `src/components/LazyYouTube.tsx`:

```tsx
import { useState, useCallback } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  onPlay?: () => void;
}

export function LazyYouTube({ videoId, title, className = '', onPlay }: LazyYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    onPlay?.();
  }, [onPlay]);

  return (
    <div className={`relative aspect-video rounded-xl overflow-hidden bg-slate-900 ${className}`}>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={handlePlay}
          className="group absolute inset-0 w-full h-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-slate-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/LazyYouTube.tsx
git commit -m "feat: create LazyYouTube component with thumbnail-to-iframe lazy loading"
```

---

### Task 4: Create VideoShowcase section (variant A)

**Files:**
- Create: `src/components/VideoShowcase.tsx`

- [ ] **Step 1: Create the VideoShowcase component**

Create `src/components/VideoShowcase.tsx`:

```tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LazyYouTube } from '@/components/LazyYouTube';
import { trackVideoPlayed } from '@/lib/posthog';
import { trackCtaClicked } from '@/lib/posthog';

const VIDEOS = [
  { id: 'd-Elwu_IUbg', key: 'v1' as const },
  { id: 'ZpI--PCy-rQ', key: 'v2' as const },
  { id: 'wfJ5q-NdAyI', key: 'v3' as const },
];

export function VideoShowcase() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.videoShowcase.title}
          </h2>
          <p className="text-xl text-[#3B3B3B]/80 max-w-3xl mx-auto">
            {t.videoShowcase.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VIDEOS.map((video, index) => {
            const content = t.videoShowcase[video.key];
            return (
              <motion.div
                key={video.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LazyYouTube
                  videoId={video.id}
                  title={content.title}
                  className="rounded-none"
                  onPlay={() =>
                    trackVideoPlayed({
                      videoId: video.id,
                      title: content.title,
                      location: 'video-showcase',
                      variant: 'a',
                    })
                  }
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#3B3B3B] mb-1">
                    {content.title}
                  </h3>
                  <p className="text-sm text-[#3B3B3B]/70">
                    {content.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => {
              trackCtaClicked('video-showcase-cta', 'video-showcase');
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#158F86] text-white px-6 py-3 rounded-xl hover:bg-[#127a72] transition-colors shadow-lg hover:shadow-[#158F86]/25 font-semibold cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.videoShowcase.cta}
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds. If it fails because `t.videoShowcase` is not typed, this is expected — the translations were added as runtime keys and TypeScript may not have the type. Check if i18n uses inferred types or manual interfaces. If the type system is loose (no strict interface for translations), it should pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/VideoShowcase.tsx
git commit -m "feat: create VideoShowcase section component for variant A"
```

---

### Task 5: Create VideoShowcaseB section (variant B)

**Files:**
- Create: `src/components/b/VideoShowcaseB.tsx`

- [ ] **Step 1: Create the VideoShowcaseB component**

Create `src/components/b/VideoShowcaseB.tsx`:

```tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useBLanguage } from '@/hooks/useBLanguage';
import { LazyYouTube } from '@/components/LazyYouTube';
import { trackVideoPlayed, trackCtaClicked } from '@/lib/posthog';

const VIDEOS = [
  { id: 'd-Elwu_IUbg', key: 'v1' as const },
  { id: 'ZpI--PCy-rQ', key: 'v2' as const },
  { id: 'wfJ5q-NdAyI', key: 'v3' as const },
];

export function VideoShowcaseB() {
  const { t } = useBLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#3B3B3B] mb-4">
            {t.videoShowcase.title}
          </h2>
          <p className="text-xl text-[#3B3B3B]/80 max-w-3xl mx-auto">
            {t.videoShowcase.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VIDEOS.map((video, index) => {
            const content = t.videoShowcase[video.key];
            return (
              <motion.div
                key={video.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LazyYouTube
                  videoId={video.id}
                  title={content.title}
                  className="rounded-none"
                  onPlay={() =>
                    trackVideoPlayed({
                      videoId: video.id,
                      title: content.title,
                      location: 'video-showcase',
                      variant: 'b',
                    })
                  }
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#3B3B3B] mb-1">
                    {content.title}
                  </h3>
                  <p className="text-sm text-[#3B3B3B]/70">
                    {content.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={() => {
              trackCtaClicked('video-showcase-cta', 'video-showcase');
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition-colors shadow-lg hover:shadow-rose-500/25 font-semibold cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.videoShowcase.cta}
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/b/VideoShowcaseB.tsx
git commit -m "feat: create VideoShowcaseB section component for variant B"
```

---

### Task 6: Modify Features.tsx — replace static images with LazyYouTube

**Files:**
- Modify: `src/components/Features.tsx`

- [ ] **Step 1: Replace image imports and ImageWithFallback with LazyYouTube**

In `src/components/Features.tsx`, make these changes:

**Remove lines 1, 5-10** (ImageWithFallback import and all 6 image imports):
```typescript
// DELETE these lines:
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import costAnalysisEn from '@/assets/feature-cost-analysis.png';
import recipeCostEn from '@/assets/feature-recipe-cost.png';
import priceComparisonEn from '@/assets/feature-price-comparison.png';
import costAnalysisTr from '@/assets/feature-cost-analysis-tr.png';
import recipeCostTr from '@/assets/feature-recipe-cost-tr.png';
import priceComparisonTr from '@/assets/feature-price-comparison-tr.png';
```

**Add these imports at the top:**
```typescript
import { LazyYouTube } from '@/components/LazyYouTube';
import { trackVideoPlayed } from '@/lib/posthog';
```

**Remove lines 14-17** (language-conditional image logic):
```typescript
// DELETE these lines:
  const isTr = language === 'tr';
  const costAnalysisImage = isTr ? costAnalysisTr : costAnalysisEn;
  const recipeCostImage = isTr ? recipeCostTr : recipeCostEn;
  const priceComparisonImage = isTr ? priceComparisonTr : priceComparisonEn;
```

**Change `image` to `videoId` in the features array:**
```typescript
  const features = [
    {
      icon: ScanLine,
      title: t.features.f1.title,
      description: t.features.f1.desc,
      benefits: [
        t.features.f1.li1,
        t.features.f1.li2,
        t.features.f1.li3,
      ],
      videoId: 'd-Elwu_IUbg',
    },
    {
      icon: Calculator,
      title: t.features.f2.title,
      description: t.features.f2.desc,
      benefits: [
        t.features.f2.li1,
        t.features.f2.li2,
        t.features.f2.li3,
      ],
      videoId: 'wfJ5q-NdAyI',
    },
    {
      icon: TrendingDown,
      title: t.features.f3.title,
      description: t.features.f3.desc,
      benefits: [
        t.features.f3.li1,
        t.features.f3.li2,
        t.features.f3.li3,
      ],
      videoId: 'ZpI--PCy-rQ',
    },
  ];
```

**Replace the ImageWithFallback block (lines 130-139)** with:
```tsx
                  <motion.div
                    className="aspect-video rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LazyYouTube
                      videoId={feature.videoId}
                      title={feature.title}
                      className="rounded-2xl"
                      onPlay={() =>
                        trackVideoPlayed({
                          videoId: feature.videoId,
                          title: feature.title,
                          location: 'features',
                          variant: 'a',
                        })
                      }
                    />
                  </motion.div>
```

Note: the `language` destructure from `useLanguage()` is no longer needed — change `const { t, language } = useLanguage()` to `const { t } = useLanguage()`.

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Features.tsx
git commit -m "feat: replace static images with LazyYouTube in Features section"
```

---

### Task 7: Modify FeaturesB.tsx — replace static images with LazyYouTube

**Files:**
- Modify: `src/components/b/FeaturesB.tsx`

- [ ] **Step 1: Apply the same changes as Task 6, but for variant B**

In `src/components/b/FeaturesB.tsx`, make identical structural changes:

**Remove lines 1, 5-10** (ImageWithFallback import and all 6 image imports):
```typescript
// DELETE these lines:
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import costAnalysisEn from '@/assets/feature-cost-analysis.png';
import recipeCostEn from '@/assets/feature-recipe-cost.png';
import priceComparisonEn from '@/assets/feature-price-comparison.png';
import costAnalysisTr from '@/assets/feature-cost-analysis-tr-b.png';
import recipeCostTr from '@/assets/feature-recipe-cost-tr.png';
import priceComparisonTr from '@/assets/feature-price-comparison-tr.png';
```

**Add these imports at the top:**
```typescript
import { LazyYouTube } from '@/components/LazyYouTube';
import { trackVideoPlayed } from '@/lib/posthog';
```

**Remove lines 14-17** (language-conditional image logic):
```typescript
// DELETE these lines:
  const isTr = language === 'tr';
  const costAnalysisImage = isTr ? costAnalysisTr : costAnalysisEn;
  const recipeCostImage = isTr ? recipeCostTr : recipeCostEn;
  const priceComparisonImage = isTr ? priceComparisonTr : priceComparisonEn;
```

**Change `image` to `videoId` in the features array** (same video IDs as Task 6):
```typescript
      videoId: 'd-Elwu_IUbg',  // f1
      videoId: 'wfJ5q-NdAyI',  // f2
      videoId: 'ZpI--PCy-rQ',  // f3
```

**Replace the ImageWithFallback block (lines 130-139)** with:
```tsx
                  <motion.div
                    className="aspect-video rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LazyYouTube
                      videoId={feature.videoId}
                      title={feature.title}
                      className="rounded-2xl"
                      onPlay={() =>
                        trackVideoPlayed({
                          videoId: feature.videoId,
                          title: feature.title,
                          location: 'features',
                          variant: 'b',
                        })
                      }
                    />
                  </motion.div>
```

Change `const { t, language } = useBLanguage()` to `const { t } = useBLanguage()`.

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/b/FeaturesB.tsx
git commit -m "feat: replace static images with LazyYouTube in FeaturesB section"
```

---

### Task 8: Wire VideoShowcase into Index.tsx and IndexB.tsx

**Files:**
- Modify: `src/pages/Index.tsx`
- Modify: `src/pages/IndexB.tsx`

- [ ] **Step 1: Add VideoShowcase to Index.tsx**

In `src/pages/Index.tsx`, add import after line 5:
```typescript
import { VideoShowcase } from "@/components/VideoShowcase";
```

Add `<VideoShowcase />` between `<PainPoints />` and `<Calculator />` (between lines 28-29):
```tsx
        <PainPoints />
        <VideoShowcase />
        <Calculator />
```

- [ ] **Step 2: Add VideoShowcaseB to IndexB.tsx**

In `src/pages/IndexB.tsx`, add import after line 5:
```typescript
import { VideoShowcaseB } from '@/components/b/VideoShowcaseB';
```

Add `<VideoShowcaseB />` between `<PainPointsB />` and `<CalculatorB />` (between lines 29-30):
```tsx
        <PainPointsB />
        <VideoShowcaseB />
        <CalculatorB />
```

- [ ] **Step 3: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Visual verification**

Run: `npm run dev`
Open `http://localhost:8080` — verify:
1. VideoShowcase section appears between PainPoints and Calculator
2. 3 video cards visible with YouTube thumbnails
3. Clicking play loads the YouTube iframe
4. Bridge CTA scrolls to calculator
5. Features section shows video embeds instead of screenshots

Open `http://localhost:8080/b` — verify the same for variant B (with rose CTA).

- [ ] **Step 5: Commit**

```bash
git add src/pages/Index.tsx src/pages/IndexB.tsx
git commit -m "feat: wire VideoShowcase sections into both landing page variants"
```
