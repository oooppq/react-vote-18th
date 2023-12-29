import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const stored = request.cookies.get('user_info');
  const userInfo = stored ? JSON.parse(stored.value) : null;

  if (userInfo && request.nextUrl.pathname === '/join')
    return NextResponse.redirect(new URL('/', request.url));

  if (!userInfo) {
    if (request.nextUrl.pathname === '/join') return;
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (userInfo.expTime < new Date().getTime()) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('user_info');
    return response;
  }

  if (userInfo.candidateVoted && request.nextUrl.pathname === '/partvote')
    return NextResponse.redirect(new URL('/partvote/result', request.url));
  if (userInfo.teamVoted && request.nextUrl.pathname === '/demovote')
    return NextResponse.redirect(new URL('/demovote/result', request.url));
}

export const config = {
  matcher: [
    '/partvote',
    '/demovote',
    '/partvote/result',
    '/demovote/result',
    '/join',
  ],
};
