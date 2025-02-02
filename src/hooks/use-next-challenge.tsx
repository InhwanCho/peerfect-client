import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface NextChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
  memberCount: string;
}

export function useNextChallenge(
  userId: string,
  options?: Partial<UseQueryOptions<NextChallengeData[], Error>>
) {
  return useQuery<NextChallengeData[]>({
    queryKey: ['nextChallenge', userId],
    queryFn: async () => {
      const endpoint = `/api/member/${userId}/next`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
    enabled: !!userId, // 기본적으로 userId가 없으면 실행되지 않음
    ...options, // ✅ 추가 옵션 병합
  });
}
