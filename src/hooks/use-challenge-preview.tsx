import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface ChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
  memberCount: string;
  challengeDay: string;
}

export function useChallengePreview(
  select: string,
  options?: Partial<UseQueryOptions<ChallengeData[], Error>>
) {
  return useQuery<ChallengeData[]>({
    queryKey: [`${select}PreviewChallenges`],
    queryFn: async () => {
      const endpoint = `/api/challenges/${select.toLowerCase()}-preview`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
    ...options, // ✅ 추가 옵션 병합
  });
}
