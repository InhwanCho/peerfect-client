import { getAuthToken, removeAuthToken } from '@/lib/token';
import { reissueToken } from '@/api/reissue-api';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const tokenDataStr = getAuthToken();
  if (!tokenDataStr) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  try {
    const { token, expiresAt } = JSON.parse(tokenDataStr) as {
      token: string;
      expiresAt: number;
    };

    if (new Date().getTime() > expiresAt) {
      console.log('🔄 토큰 만료됨, 갱신 시도');
      const newAccessToken = await reissueToken(token); // ✅ 토큰을 인자로 전달
      if (!newAccessToken) {
        return NextResponse.redirect(new URL('/auth', req.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.error('🔴 미들웨어 오류:', error);
    removeAuthToken();
    return NextResponse.redirect(new URL('/auth', req.url));
  }
}
