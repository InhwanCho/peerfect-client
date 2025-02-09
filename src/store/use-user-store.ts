import { create } from 'zustand';
import { removeAuthToken, setAuthToken } from '@/lib/token';
import { reissueToken } from '@/api/reissue-api';

interface ChallengeInfo {
  currentChallenge: string | null; // ex: "UI"
  currentDay: string | null; // ex: "day-2"
}

interface UserState {
  // 인증 상태
  token: string | null;
  expiresAt: number | null;
  isAuthenticated: boolean;

  // 유저 정보
  challengeInfo: ChallengeInfo | null;
  nickName: string | null;
  memberImg: string | null;
  memberId: string | null;
  memberEmail: string | null;

  // 액션
  setUserInfo: (
    userInfo: Partial<
      Omit<UserState, 'setUserInfo' | 'setAuthToken' | 'clearAuthToken'>
    >
  ) => void;
  clearUserInfo: () => void;
  setAuthToken: (token: string, expiresAt: number) => void;
  clearAuthToken: () => void;
}

// Zustand 상태 관리
export const useUserStore = create<UserState>((set) => ({
  token: null,
  expiresAt: null,
  isAuthenticated: false,
  challengeInfo: null,
  nickName: null,
  memberImg: null,
  memberId: null,
  memberEmail: null,

  // 유저 정보 설정
  setUserInfo: (userInfo) => set((state) => ({ ...state, ...userInfo })),

  // 유저 정보 초기화
  clearUserInfo: () =>
    set(() => ({
      challengeInfo: null,
      nickName: null,
      memberImg: null,
      memberId: null,
      memberEmail: null,
    })),

  // 인증 토큰 설정
  setAuthToken: (token, expiresAt) =>
    set({
      token,
      expiresAt,
      isAuthenticated: true,
    }),

  // 인증 토큰 제거 및 로그아웃
  clearAuthToken: () => {
    removeAuthToken();
    set({
      token: null,
      expiresAt: null,
      isAuthenticated: false,
    });
  },
}));

// ✅ **스토어 초기화 함수**
export const initializeUserStore = async () => {
  const tokenDataStr = localStorage.getItem('AuthorizationToken');

  if (tokenDataStr) {
    try {
      const { token, expiresAt } = JSON.parse(tokenDataStr) as {
        token: string;
        expiresAt: number;
      };

      if (new Date().getTime() > expiresAt) {
        try {
          // 🔄 토큰 재발급 요청
          const newAccessToken = await reissueToken(token);

          // 새로운 토큰 저장
          const newExpiresAt = new Date().getTime() + 59 * 60 * 1000;
          setAuthToken(newAccessToken);
          useUserStore.getState().setAuthToken(newAccessToken, newExpiresAt);
        } catch (error) {
          console.log('🔴 토큰 재발급 실패, 로그아웃 처리', error);
          useUserStore.getState().clearAuthToken();
        }
      } else {
        useUserStore.getState().setAuthToken(token, expiresAt);
      }
    } catch (error) {
      console.error('🔴 토큰 파싱 오류:', error);
      useUserStore.getState().clearAuthToken();
    }
  }
};
