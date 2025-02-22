// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { reissueToken } from '@/api/reissue-api';
import { TOKEN_EXPIRE_MINUTES } from '@/lib/token';

export async function middleware(req: NextRequest) {
  // 쿠키에서 accessToken 확인
  const accessToken = req.cookies.get('AuthorizationToken')?.value;

  if (!accessToken) {
    // accessToken이 없으면 refreshToken(httpOnly 쿠키)을 활용하여 백엔드에서 새 accessToken 재발급 요청
    // reissueToken 함수는 refreshToken이 httpOnly 쿠키에 저장되어 있음을 전제로 합니다.
    const newAccessToken = await reissueToken();
    if (newAccessToken) {
      const response = NextResponse.next();
      // 새 accessToken을 쿠키에 저장 (maxAge는 TOKEN_EXPIRE_MINUTES 기준)
      response.cookies.set('AuthorizationToken', newAccessToken, {
        maxAge: TOKEN_EXPIRE_MINUTES * 60,
        // secure: true,
        // sameSite: 'strict',
      });
      return response;
    } else {
      // 재발급 실패 시 로그인 페이지로 리다이렉트
      return NextResponse.redirect(new URL('/auth', req.url));
    }
  }

  // accessToken이 존재하면 그대로 요청 처리
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!auth|$).*)'], // /auth 및 홈 페이지 제외
};
