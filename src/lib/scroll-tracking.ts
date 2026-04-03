import { capture } from '@/lib/posthog';

const TRACKED_KEY = 'tedaarik_scroll_tracked';

/**
 * Tracks scroll depth milestones (25%, 50%, 75%, 100%) on the landing page.
 * Only fires each milestone once per session.
 */
export function initScrollTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const tracked = new Set<number>();

  // Restore already-tracked milestones from session
  try {
    const stored = sessionStorage.getItem(TRACKED_KEY);
    if (stored) {
      JSON.parse(stored).forEach((m: number) => tracked.add(m));
    }
  } catch {
    // ignore
  }

  const milestones = [25, 50, 75, 100];

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const milestone of milestones) {
      if (percent >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        capture('scroll_depth', { depth: milestone });
        try {
          sessionStorage.setItem(TRACKED_KEY, JSON.stringify([...tracked]));
        } catch {
          // ignore
        }
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}
