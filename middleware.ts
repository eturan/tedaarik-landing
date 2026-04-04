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

  // Already assigned, pass through
  if (existingVariant) {
    return next();
  }

  // Assign a new variant and set cookie
  const variant = Math.random() < 0.5 ? 'a' : 'b';
  const response = next();
  response.headers.append(
    'Set-Cookie',
    `${COOKIE_NAME}=${variant}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`
  );
  return response;
}

export const config = {
  matcher: '/',
};
