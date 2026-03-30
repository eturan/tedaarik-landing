const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'fbclid',
  'gclid',
] as const;

type UtmKey = (typeof UTM_KEYS)[number];
type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = 'tedaarik_utm';

/**
 * Reads UTM params and click IDs from the current URL and persists them to
 * sessionStorage. Only writes when at least one parameter is present, so
 * navigating to pages without UTM params never clears previously stored values.
 */
export function captureUtmParams(): void {
  const searchParams = new URLSearchParams(window.location.search);
  const captured: UtmParams = {};
  let hasParams = false;

  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      captured[key] = value;
      hasParams = true;
    }
  }

  if (hasParams) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  }
}

function getStoredUtmParams(): UtmParams {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as UtmParams) : {};
  } catch {
    return {};
  }
}

/**
 * Appends any stored UTM/click-ID parameters to a signup URL so attribution
 * data is forwarded to the app.
 */
export function buildSignupUrl(baseUrl: string): string {
  const params = getStoredUtmParams();
  const url = new URL(baseUrl);

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
}

// Auto-capture on module load so params are available before any component renders.
// captureUtmParams() is idempotent — only writes when UTM params are present in the URL.
if (typeof window !== 'undefined') {
  captureUtmParams();
}
