import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface MainChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
  memberCount: string;
}

export function useMainChallenge(
  userId: string,
  options?: Partial<UseQueryOptions<MainChallengeData, Error>>
) {
  return useQuery<MainChallengeData>({
    queryKey: ['mainChallenge', userId],
    queryFn: async () => {
      const endpoint = `/api/member/${userId}/main`;
      const response = await apiClient.get(endpoint);
      return response.data?.[0] ?? null; // 🚀 `undefined` 방지
    },
    enabled: !!userId, // 기본적으로 userId가 없으면 실행되지 않음
    ...options, // ✅ 추가 옵션 병합 (enabled 옵션 포함 가능)
  });
}
