import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const clientReqHeaders = request.headers;

  const serverReqHeaders = new Headers();
  serverReqHeaders.set('AUTHORIZATION', clientReqHeaders.get('AUTHORIZATION')!);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/users/logout`,
    {
      method: 'POST',
      headers: serverReqHeaders,
      cache: 'no-cache',
    }
  );

  if (res.ok) {
    cookies().delete('user_info');
    return new Response('Logout Success', {
      status: 200,
    });
  } else
    return new Response('Logout Failed', {
      status: 400,
    });
}
