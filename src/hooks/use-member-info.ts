import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface ChallengeInfo {
  currentChallenge: string; // ex: "UI"
  currentDay: string; // ex: "day-2"
}

interface MemberInfo {
  challengeInfo: ChallengeInfo | null;
  nickName: string;
  memberImg: string;
  memberId: string;
  memberEmail: string;
}

// Fetch 함수
export async function fetchMemberInfo(memberId: string): Promise<MemberInfo> {
  const endpoint = `/api/member/${memberId}/memberInfo`;
  const response = await apiClient.get(endpoint);
  // console.log('response :', response);
  return response.data;
}

// useQuery 훅
export function useMemberInfo(memberId: string) {
  return useQuery<MemberInfo>({
    queryKey: ['memberInfo', memberId],
    queryFn: () => fetchMemberInfo(memberId), // fetch 함수 재사용
    enabled: !!memberId, // memberId가 존재할 때만 요청 실행
  });
}
