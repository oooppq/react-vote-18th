import { getSession } from '@/utils/auth';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const userInfo = await getSession();
  const part = userInfo?.part;
  try {
    const body = await req.json();
    const token = req.headers.get('AUTHORIZATION');
    if (!token) {
      throw new Error('Invalid token');
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/part-leader/votes?part=${part}`,
      {
        headers: {
          'Content-Type': 'application/json',
          AUTHORIZATION: token,
        },
        method: 'POST',
        body: JSON.stringify({ id: body.id }),
        cache: 'no-cache',
      }
    );

    if (res.ok) {
      cookies().set(
        'user_info',
        JSON.stringify({
          ...userInfo,
          candidateVoted: true,
        })
      );
      return new Response(
        JSON.stringify({ message: 'Vote registered successfully' }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } else if (res.status === 403) {
      return new Response(JSON.stringify({ message: 'Token expired' }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      const errorResponse = await res.json();
      return new Response(JSON.stringify(errorResponse), {
        status: res.status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: 'An error occurred' }), {
      status: 409,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
