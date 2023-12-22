import { TUserInfo } from '@/types';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();
  const stored = cookieStore.get('user_info');
  if (!stored) {
    return NextResponse.json(null);
  }
  const userInfo: TUserInfo = JSON.parse(stored.value);
  if (userInfo.expTime < new Date().getTime()) {
    cookieStore.delete('user_info');
    return NextResponse.json(null);
  }
  return NextResponse.json(userInfo);
}
