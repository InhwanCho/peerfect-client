import { getAuthToken, removeAuthToken } from '@/lib/token';
import { reissueToken } from '@/api/reissue-api';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = getAuthToken();

  if (!token) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  try {
    // 토큰 정보 가져오기
    const tokenDataStr = localStorage.getItem('AuthorizationToken');
    if (!tokenDataStr) return NextResponse.redirect(new URL('/auth', req.url));

    const { expiresAt } = JSON.parse(tokenDataStr) as { expiresAt: number };

    if (new Date().getTime() > expiresAt) {
      console.log('🔄 토큰 만료됨, 갱신 시도');
      const newAccessToken = await reissueToken(token);

      if (!newAccessToken) {
        console.log('🔴 토큰 재발급 실패, 로그아웃 처리');
        removeAuthToken();
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

export const config = {
  matcher: ['/((?!auth|$).*)'], // `/auth`와 `/`(홈) 페이지 제외
};
