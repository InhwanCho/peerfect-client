import { create } from 'zustand';

interface ChallengeInfo {
  currentChallenge: string | null; // ex: "UI"
  currentDay: string | null; // ex: "day-2"
}

interface UserState {
  challengeInfo: ChallengeInfo | null;
  nickName: string | null;
  memberImg: string | null; // URL 형태의 이미지 문자열
  memberId: string | null;
  memberEmail: string | null;
  setUserInfo: (userInfo: Partial<Omit<UserState, 'setUserInfo'>>) => void;
  clearUserInfo: () => void;
}

export const useUserStore = create<UserState>((set) => ({
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
}));
