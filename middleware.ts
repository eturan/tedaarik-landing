import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'ab-variant';
const COOKIE_MAX_AGE = 2592000; // 30 days in seconds

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only apply A/B testing to the root path
  if (pathname !== '/') {
    return NextResponse.next();
  }

  const existingVariant = request.cookies.get(COOKIE_NAME)?.value;
  const variant = existingVariant || (Math.random() < 0.5 ? 'a' : 'b');

  // Variant A: serve the current landing page (no rewrite needed)
  if (variant === 'a') {
    const response = NextResponse.next();
    if (!existingVariant) {
      response.cookies.set(COOKIE_NAME, 'a', {
        maxAge: COOKIE_MAX_AGE,
        path: '/',
      });
    }
    return response;
  }

  // Variant B: rewrite to /lp-b (user still sees "/" in browser)
  const url = request.nextUrl.clone();
  url.pathname = '/lp-b';
  const response = NextResponse.rewrite(url);
  if (!existingVariant) {
    response.cookies.set(COOKIE_NAME, 'b', {
      maxAge: COOKIE_MAX_AGE,
      path: '/',
    });
  }
  return response;
}

export const config = {
  matcher: '/',
};
