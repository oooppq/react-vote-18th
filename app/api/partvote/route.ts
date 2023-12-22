import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/part-leader/results?part=FE`);
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