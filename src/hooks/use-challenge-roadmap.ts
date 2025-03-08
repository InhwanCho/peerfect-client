import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface RoadmapInfo {
  currentDay: number;
}

export function useChallengeRoadmapInfo(
  memberId: string,
  options?: Partial<UseQueryOptions<RoadmapInfo, Error>>
) {
  return useQuery<RoadmapInfo>({
    queryKey: ['RoadmapInfo', memberId],
    queryFn: async () => {
      const endpoint = `/api/member/roadmap-info/${memberId}`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
    enabled: !!memberId,
    ...options,
  });
}
