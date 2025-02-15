const TOKEN_EXPIRE_MINUTES = 59;
const TOKEN_STORAGE_KEY = 'AuthorizationToken'; // accessToken

// Bearer Prefix 제거 함수
export function cleanBearerPrefix(token: string): string {
  return token.startsWith('Bearer ') ? token.slice(7) : token;
}

// Token + 만료시점(expiresAt)을 LocalStorage에 저장
export function setAuthToken(token: string) {
  const cleanedToken = cleanBearerPrefix(token);

  // 현재 시간 + 59분 (밀리초 단위)
  const expiresAt = new Date().getTime() + TOKEN_EXPIRE_MINUTES * 60 * 1000;

  const tokenData = {
    token: cleanedToken,
    expiresAt,
  };
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokenData));
}

// LocalStorage에서 Token을 파싱해 가져오는 함수
export function getAuthToken(): string | null {
  const tokenDataStr = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (!tokenDataStr) return null;

  try {
    const tokenData = JSON.parse(tokenDataStr) as {
      token: string;
      expiresAt: number;
    };

    if (new Date().getTime() > tokenData.expiresAt) {
      // 만료된 경우
      // removeAuthToken();
      console.log('토큰 만료 - (임시) 토큰 재사용?');
      return tokenData.token;
    }
    return tokenData.token;
  } catch (error) {
    console.error('accessToken 파싱 오류:', error);
    removeAuthToken();
    return null;
  }
}

// 토큰 전체 삭제
export function removeAuthToken() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

export function removeUserSummary() {
  localStorage.removeItem('userSummary');
}
