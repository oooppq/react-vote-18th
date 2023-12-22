import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userInfo = request.cookies.get('user_info');
  if (!userInfo) return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/vote', '/result'],
};
