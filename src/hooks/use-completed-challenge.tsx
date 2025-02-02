import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface CompletedChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
  memberCount: string;
}

export function useCompletedChallenge(
  userId: string,
  options?: Partial<UseQueryOptions<CompletedChallengeData[], Error>>
) {
  return useQuery<CompletedChallengeData[]>({
    queryKey: ['CompletedChallenge', userId],
    queryFn: async () => {
      const endpoint = `/api/member/${userId}/complete`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
    enabled: !!userId, // 기본적으로 userId가 없으면 실행되지 않음
    ...options, // ✅ 추가 옵션 병합
  });
}
