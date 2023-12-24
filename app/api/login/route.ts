import { TUserInfo } from '@/types';
import { cookies } from 'next/headers';

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ loginId: body.loginId, password: body.password }),
    cache: 'no-cache',
  });

  if (res.ok) {
    const authInfo = await res.json();
    cookies().set(
      'user_info',
      JSON.stringify({
        ...authInfo,
        expTime: new Date().getTime() + EXP_LIMIT,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: EXP_LIMIT,
        path: '/',
      }
    );

    return new Response('Authorized', {
      status: 200,
    });
  } else if (res.status === 404) {
    return new Response('Wrong ID', {
      status: 404,
    });
  } else if (res.status === 401) {
    return new Response('Wrong Password', {
      status: 401,
    });
  } else {
    return new Response('Login Failed', {
      status: 403,
    });
  }
}
