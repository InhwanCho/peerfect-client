// src/lib/token.ts
import Cookies from 'js-cookie';

export const TOKEN_EXPIRE_MINUTES = 59;
const ACCESS_TOKEN_COOKIE_KEY = 'AuthorizationToken';

// Bearer Prefix 제거 함수
export function cleanBearerPrefix(token: string): string {
  return token.startsWith('Bearer ') ? token.slice(7) : token;
}

// accessToken 쿠키에 저장 (만료시간은 초 단위 maxAge로 설정)
export function setAuthToken(token: string) {
  console.log('token :', token);
  const cleanedToken = cleanBearerPrefix(token);
  Cookies.set(ACCESS_TOKEN_COOKIE_KEY, cleanedToken, {
    expires: TOKEN_EXPIRE_MINUTES * 60, // 초 단위
  });
}

// accessToken 가져오기
export function getAuthToken(): string | null {
  return Cookies.get(ACCESS_TOKEN_COOKIE_KEY) || null;
}

// accessToken 삭제
export function removeAuthToken() {
  Cookies.remove(ACCESS_TOKEN_COOKIE_KEY);
}

export function removeUserSummary() {
  Cookies.remove('userSummary');
}
