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

    const newAccessToken = response.data?.accessToken;

    if (!newAccessToken) {
      console.log(
        '🔴 응답에 토큰 없음, 로그아웃 처리 해야되는데, 일단 디버깅 대기'
      );
      // removeAuthToken();
      // useUserStore.getState().clearAuthToken();
      // throw new Error('새로운 토큰이 응답에 없습니다.');
      return 'tem string return null just for debug';
    }

    // ✅ 새로운 토큰 저장 (59분 유효)
    const newExpiresAt = new Date().getTime() + 59 * 60 * 1000;
    setAuthToken(newAccessToken);
    useUserStore.getState().setAuthToken(newAccessToken, newExpiresAt);

    console.log('✅ 토큰 재발급 성공:', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('🔴 토큰 재발급 실패:', error);
    // removeAuthToken();
    // useUserStore.getState().clearAuthToken();
    // throw new Error('토큰 재발급 중 오류가 발생했습니다.');
    return 'tem string return null just for debug';
  }
}
