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

export function trackStartTrial() {
  track('StartTrial');
}

export function trackLead(params?: Record<string, unknown>) {
  track('Lead', params);
}
