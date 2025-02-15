import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { removeAuthToken } from '@/lib/token';

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

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
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
    }),
    {
      name: 'user-info', // localStorage에 저장될 key 이름
      storage: createJSONStorage(() => localStorage), // localStorage에 저장
    }
  )
);
