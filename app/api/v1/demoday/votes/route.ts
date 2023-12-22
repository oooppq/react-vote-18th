import { NextRequest, NextResponse } from 'next/server';
//쿠키에 저장되어있는 유저 정보 꺼내서 part 부분 세팅해야함
export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/demoday/result`);
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
    
    const { teamName } = body;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/demoday/vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ teamName: teamName })
    });
    console.log(teamName);
    return new Response(JSON.stringify({ message: "Vote registered successfully" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "An error occurred" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}