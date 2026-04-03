import { next } from '@vercel/edge';

const COOKIE_NAME = 'ab-variant';
const COOKIE_MAX_AGE = 2592000; // 30 days in seconds

export default function middleware(request: Request) {
  const url = new URL(request.url);

  // Only apply A/B testing to the root path
  if (url.pathname !== '/') {
    return next();
  }

  // Read existing variant from cookie
  const cookies = request.headers.get('cookie') || '';
  const match = cookies.match(new RegExp(`${COOKIE_NAME}=([ab])`));
  const existingVariant = match?.[1] as 'a' | 'b' | undefined;
  const variant = existingVariant || (Math.random() < 0.5 ? 'a' : 'b');

  // Variant A: serve the current landing page (no rewrite needed)
  if (variant === 'a') {
    const response = next();
    if (!existingVariant) {
      response.headers.append(
        'Set-Cookie',
        `${COOKIE_NAME}=a; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`
      );
    }
    return response;
  }

  // Variant B: rewrite to /lp-b (user still sees "/" in browser)
  url.pathname = '/lp-b';
  const response = next({ rewrite: url });
  if (!existingVariant) {
    response.headers.append(
      'Set-Cookie',
      `${COOKIE_NAME}=b; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`
    );
  }
  return response;
}

export const config = {
  matcher: '/',
};
