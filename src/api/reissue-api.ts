import axios from 'axios';
import { setAuthToken, removeAuthToken, getAuthToken } from '@/lib/token';
import { useUserStore } from '@/store/use-user-store';

const REISSUE_ENDPOINT = '/api/member/regenerate-access';

/**
 * 🔄 토큰 재발급 요청
 * @param {string | null} token 기존 액세스 토큰
 * @returns {Promise<string | null>} 새 액세스 토큰 반환
 */
export async function reissueToken(
  token: string | null
): Promise<string | null> {
  if (!token) {
    console.log('🔴 기존 토큰 없음, 로그아웃 처리');
    removeAuthToken();
    useUserStore.getState().clearAuthToken();
    return null;
  }

  try {
    // 🔄 API 요청: 토큰 재발급
    const response = await axios.post(
      REISSUE_ENDPOINT,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      }
    );

    const newAccessToken = response.data?.accessToken;

    if (!newAccessToken) {
      console.log('🔴 응답에 토큰 없음, 로그아웃 처리');
      removeAuthToken();
      useUserStore.getState().clearAuthToken();
      return null;
    }

    // ✅ 새로운 토큰 저장 (59분 유효)
    const newExpiresAt = new Date().getTime() + 59 * 60 * 1000;
    setAuthToken(newAccessToken);
    useUserStore.getState().setAuthToken(newAccessToken, newExpiresAt);

    console.log('✅ 토큰 재발급 성공:', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('🔴 토큰 재발급 실패:', error);
    removeAuthToken();
    useUserStore.getState().clearAuthToken();
    return null;
  }
}
