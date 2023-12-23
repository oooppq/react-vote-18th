import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/utils/auth';

export async function GET() {
  const userInfo = await getSession();
  const part=userInfo?.part; 
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/part-leader/results?part=${part}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    const candidates = data.candidateList.map((candidate: any) => ({
      id: candidate.id,
      name: candidate.name,
      part: candidate.part,
      count: candidate.count || 0
    }));

    return new Response(JSON.stringify(candidates), {
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
  const userInfo = await getSession();
  const part=userInfo?.part;
  try {
    const body = await req.json();
    const { id } = body;
    const token = req.headers.get('AUTHORIZATION');
    if (!token ){
     throw new Error('Invalid token');
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/part-leader/votes?part=${part}`, {

      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': token
      },
      method: 'POST',
      body: JSON.stringify({ id: body.id })
    });
    if(res.ok){
    return new Response(JSON.stringify({ message: "Vote registered successfully" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }else if(res.status === 403){
    return new Response(JSON.stringify({ message: "Token expired" }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else{
    const errorResponse = await res.json();
    return new Response(JSON.stringify(errorResponse), {
      status: res.status,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
catch (error) {
    return new Response(JSON.stringify({ message: "An error occurred" }), {
      status: 409,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}