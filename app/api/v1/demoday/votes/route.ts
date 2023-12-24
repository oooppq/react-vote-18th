import { getSession } from '@/utils/auth';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const userInfo = await getSession();

  try {
    const body = await req.json();

    const token = req.headers.get('AUTHORIZATION');
    if (!token) {
      throw new Error('Invalid token');
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/demoday/votes`,
      {
        headers: {
          'Content-Type': 'application/json',
          AUTHORIZATION: token,
        },
        method: 'POST',
        body: JSON.stringify({ teamName: body.teamName }),
        cache: 'no-cache',
      }
    );

    if (res.ok) {
      cookies().set(
        'user_info',
        JSON.stringify({
          ...userInfo,
          teamVoted: true,
        })
      );
      return new Response(
        JSON.stringify({ message: 'Vote registered successfully' }),
        {
          status: 201,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } else if (res.status === 403) {
      return new Response(
        JSON.stringify({ message: 'Token expired or invalid' }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
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
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
