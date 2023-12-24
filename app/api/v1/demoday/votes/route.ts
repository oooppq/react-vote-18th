import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/utils/auth';

export async function GET() {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/demoday/results`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    const List = data.teamList.map((team: any) => ({
      id: team.teamName,
      name: team.teamName,
      part: team.description,
      count: team.count || 0
    }));

    return new Response(JSON.stringify(List), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "1" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const token = req.headers.get('AUTHORIZATION');
    console.log(token);
    if (!token){
            throw new Error('Invalid token');
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/demoday/votes`, {
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': token
      },
      method: 'POST',
      body: JSON.stringify({ teamName: body.teamName })
    });
    if (res.ok) {
      return new Response(JSON.stringify({ message: "Vote registered successfully" }), {
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else if (res.status === 403) {

      return new Response(JSON.stringify({ message: "Token expired or invalid" }), {
        status: 403,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      const errorResponse = await res.json();
      return new Response(JSON.stringify(errorResponse), {
        status: res.status,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "An error occurred" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
