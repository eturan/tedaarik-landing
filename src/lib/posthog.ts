// PostHog Analytics Utility
// Access the global posthog instance loaded via index.html

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
      identify: (distinctId: string, properties?: Record<string, unknown>) => void;
    };
  }
}

// Event names as constants for type safety
export const EVENTS = {
  EARLY_ACCESS_FORM_OPENED: 'early_access_form_opened',
  EARLY_ACCESS_FORM_SUBMITTED: 'early_access_form_submitted',
  CTA_CLICKED: 'cta_clicked',
  BLOG_POST_VIEWED: 'blog_post_viewed',
  FAQ_EXPANDED: 'faq_expanded',
  CALCULATOR_STARTED: 'calculator_started',
  CALCULATOR_EMAIL_SUBMITTED: 'calculator_email_submitted',
  SIGNUP_CTA_CLICKED: 'signup_cta_clicked',
  VIDEO_PLAYED: 'video_played',
} as const;

// Type-safe capture function
export function capture(event: string, properties?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(event, properties);
  }
}

// Specific event helpers
export function trackEarlyAccessFormOpened(source: string) {
  capture(EVENTS.EARLY_ACCESS_FORM_OPENED, { source });
}

export function trackEarlyAccessFormSubmitted(data: {
  email: string;
  company?: string;
  employeeCount?: string;
}) {
  capture(EVENTS.EARLY_ACCESS_FORM_SUBMITTED, {
    email: data.email,
    company: data.company,
    employee_count: data.employeeCount,
  });
}

export function trackCtaClicked(buttonText: string, location: string) {
  capture(EVENTS.CTA_CLICKED, {
    button_text: buttonText,
    location,
  });
}

export function trackBlogPostViewed(data: {
  slug: string;
  title: string;
  category: string;
}) {
  capture(EVENTS.BLOG_POST_VIEWED, {
    slug: data.slug,
    title: data.title,
    category: data.category,
  });
}

export function trackFaqExpanded(question: string) {
  capture(EVENTS.FAQ_EXPANDED, { question });
}

export function trackCalculatorStarted(variant: 'a' | 'b') {
  capture(EVENTS.CALCULATOR_STARTED, { variant });
}

export function trackCalculatorEmailSubmitted(data: {
  email: string;
  variant: 'a' | 'b';
  [key: string]: unknown;
}) {
  capture(EVENTS.CALCULATOR_EMAIL_SUBMITTED, data);
}

export function trackSignupCtaClicked(location: string, variant: 'a' | 'b') {
  capture(EVENTS.SIGNUP_CTA_CLICKED, { location, variant });
}

export function trackVideoPlayed(data: {
  videoId: string;
  title: string;
  location: 'video-showcase' | 'features';
  variant: 'a' | 'b';
}) {
  capture(EVENTS.VIDEO_PLAYED, data);
}
