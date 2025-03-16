import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { removeAuthToken } from '@/lib/token';
import { cookieStorage } from '@/lib/cookie-storage';

interface ChallengeInfo {
  challengeNo: string | null;
  currentChallenge: string | null;
  currentDay: string | null;
}

interface UserState {
  token: string | null;
  expiresAt: number | null;
  isAuthenticated: boolean;
  challengeInfo: ChallengeInfo | null;
  nickName: string | null;
  memberImg: string | null;
  memberId: string | null;
  memberEmail: string | null;
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
      setUserInfo: (userInfo) => set((state) => ({ ...state, ...userInfo })),
      clearUserInfo: () =>
        set(() => ({
          challengeInfo: null,
          nickName: null,
          memberImg: null,
          memberId: null,
          memberEmail: null,
        })),
      setAuthToken: (token, expiresAt) =>
        set({
          token,
          expiresAt,
          isAuthenticated: true,
        }),
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
      name: 'user-info',
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);
