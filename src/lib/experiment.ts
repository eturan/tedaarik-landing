import { capture } from '@/lib/posthog';

const COOKIE_NAME = 'ab-variant';
const TRACKED_KEY = 'tedaarik_experiment_tracked';

type Variant = 'a' | 'b' | null;

/**
 * Reads the A/B test variant from the cookie set by Vercel Edge Middleware.
 */
export function getVariant(): Variant {
  if (typeof document === 'undefined') return null;

  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));

  if (!match) return null;

  const value = match.split('=')[1];
  return value === 'a' || value === 'b' ? value : null;
}

/**
 * Reports the experiment variant to PostHog. Only fires once per session
 * to avoid duplicate events on re-renders or navigation.
 */
export function trackExperiment(): void {
  const variant = getVariant();
  if (!variant) return;

  // Only fire once per session
  try {
    if (sessionStorage.getItem(TRACKED_KEY)) return;
    sessionStorage.setItem(TRACKED_KEY, '1');
  } catch {
    // sessionStorage unavailable (private browsing edge case), fire anyway
  }

  capture('experiment_started', {
    experiment: 'landing-page-v1',
    variant,
  });
}
