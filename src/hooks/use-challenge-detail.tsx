import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface ChallengeDetail {
  challengeGroup: string; // 그룹 정보 (예: "UI: 한걸음부터")
  challengeType: string; // 타입 정보 (예: "UI")
  challengeIntro: string; // 상세 소개 (예: "사용자의 첫 인상을 결정짓는 로그인/회원가입 페이지입니다. 안전...")
  challengeShortIntro: string; // 짧은 소개글 (예: "짧은 소개글입니다")
  challengeMission: string; // 미션 정보 (예: "- 로그인: - 이메일 입력창, 비밀번호 입력창, 로그인 버튼...")
  challengeLevel: number; // 레벨 (예: 0)
  challengeTitle: string; // 챌린지 타이틀
  ruleDetail?: null; // 상세 규칙 (예: "11111")
  //  challengeDay, 등록날짜, 참여자 수, 난이도 항목 추가 필요
}

export function useChallengeDetail(id: string, active: string) {
  return useQuery<ChallengeDetail>({
    queryKey: [`${id}-challenge-detail`, active],
    queryFn: async () => {
      const endpoint = `/api/challenges/${id}/detail`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
  });
}
