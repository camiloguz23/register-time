import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse<unknown> {
  const cookie = cookies();
  const isValid = cookie.get('email');

  if (
    (request.nextUrl.pathname.startsWith('/register') ||
      request.nextUrl.pathname.startsWith('/counter') ||
      request.nextUrl.pathname.startsWith('/history')) &&
    !isValid?.value
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if ((request.nextUrl.pathname.endsWith('/') || request.nextUrl.pathname.startsWith('/login')) && isValid?.value) {
    return NextResponse.redirect(new URL('/register', request.url));
  }
  return NextResponse.next();
}
