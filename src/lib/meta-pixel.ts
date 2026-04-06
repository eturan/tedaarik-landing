declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', event, params);
  }
}

/** Funnel: Interest — user starts the calculator (shows intent to engage) */
export function trackCalculatorStartedPixel() {
  track('ViewContent', { content_name: 'calculator' });
}

/** Funnel: Intent — user submits email in calculator */
export function trackLead(params?: Record<string, unknown>) {
  track('Lead', params);
}

/** Funnel: Intent — user clicks any "Start Trial" CTA */
export function trackStartTrial() {
  track('StartTrial');
}
