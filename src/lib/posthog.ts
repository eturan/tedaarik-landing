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
  CTA_CLICKED: 'cta_clicked',
  BLOG_POST_VIEWED: 'blog_post_viewed',
  FAQ_EXPANDED: 'faq_expanded',
} as const;

// Type-safe capture function
export function capture(event: string, properties?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(event, properties);
  }
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
