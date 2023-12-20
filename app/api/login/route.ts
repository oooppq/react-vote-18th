import { TUserInfo } from '@/types';
import { cookies } from 'next/headers';

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export async function POST(request: Request) {
  const body = await request.json();
  const { id, password } = body;
  const res = await fetch(`${process.env.SERVER_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      id,
      password,
    }),
  });

  const authInfo = await res.json();

  cookies().set(
    'user_info',
    JSON.stringify({ ...authInfo, expTime: new Date().getTime() + EXP_LIMIT }),
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
}
