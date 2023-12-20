import { TUserInfo } from '@/types';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const EXP_LIMIT = 1000 * 60 * 60;

export async function GET() {
  const cookieStore = cookies();
  const stored = cookieStore.get('user_info');
  if (!stored) {
    return NextResponse.json(
      {
        message: 'Unauthorized',
      },
      {
        status: 401,
      }
    );
  }
  const userInfo: TUserInfo = JSON.parse(stored.value);

  return NextResponse.json(userInfo);
}
