import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const clientReqHeaders = request.headers;

  const serverReqHeaders = new Headers();
  serverReqHeaders.set('Authorization', clientReqHeaders.get('Authorization')!);
  const res = await fetch(`${process.env.SERVER_URL}/uesrs/logout`, {
    headers: serverReqHeaders,
  });

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
