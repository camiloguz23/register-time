import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const cookie = cookies();
  const isValid = cookie.get('email');
  if (request.nextUrl.pathname.startsWith('/register') && !isValid) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.endsWith('/') && isValid) {
    return NextResponse.redirect(new URL('/register', request.url));
  }
}
