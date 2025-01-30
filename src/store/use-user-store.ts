import { create } from 'zustand';

interface UserState {
  memberId: string | null;
  nickName: string | null;
  email: string | null;
  memberImg: string | null;
  setUserInfo: (userInfo: Partial<Omit<UserState, 'setUserInfo'>>) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  memberId: null,
  nickName: null,
  email: null,
  memberImg: null,

  // 유저 정보 설정
  setUserInfo: (userInfo) => set((state) => ({ ...state, ...userInfo })),

  // 유저 정보 초기화 - 로그아웃 시 사용
  clearUserInfo: () =>
    set(() => ({
      memberId: null,
      nickName: null,
      email: null,
      memberImg: null,
    })),
}));
