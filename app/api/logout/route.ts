import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const clientReqHeaders = request.headers;
  //   console.log(clientReqHeaders);

  const serverReqHeaders = new Headers();
  serverReqHeaders.set('Authorization', clientReqHeaders.get('Authorization')!);
  //   const res = await fetch(`${process.env.SERVER_URL}/logout`, {
  //     headers: serverReqHeaders,
  //   });
  const res = { ok: true };
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
