import axios from 'axios';
import { setAuthToken, removeAuthToken } from '@/lib/token';
import { useUserStore } from '@/store/use-user-store';

const REISSUE_ENDPOINT = 'api/member/regenerate-access';

/**
 * 🔄 토큰 재발급 요청
 * @param {string} token 기존 액세스 토큰 (null 처리 전에 호출하는 곳에서 검사)
 * @returns {Promise<string>} 새 액세스 토큰 반환
 */
export async function reissueToken(token: string): Promise<string> {
  try {
    // 🔄 API 요청: 토큰 재발급
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + REISSUE_ENDPOINT,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      }
    );
    console.log('리이슈 response :', response);

    const data = response.data;
    const prefix = 'accessToken 재발급완료 : ';
    let newAccessToken = data;

    // data가 문자열이고 prefix로 시작하면 prefix 부분 제거
    if (typeof data === 'string' && data.startsWith(prefix)) {
      newAccessToken = data.substring(prefix.length).trim();
      console.log('newAccessToken :', newAccessToken);
    }

    if (!newAccessToken) {
      removeAuthToken();
      useUserStore.getState().clearAuthToken();
      useUserStore.persist.clearStorage();
      throw new Error('새로운 토큰이 응답에 없습니다.');
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
    useUserStore.persist.clearStorage();
    throw new Error('토큰 재발급 중 오류가 발생했습니다.');
  }
}
