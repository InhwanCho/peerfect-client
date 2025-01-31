import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface MainChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
}

export function useMainChallenge(userId: string) {
  return useQuery<MainChallengeData>({
    queryKey: ['mainChallenge', userId],
    queryFn: async () => {
      const endpoint = `/api/member/${userId}/main`;
      const response = await apiClient.get(endpoint);
      return response.data[0];
    },
    enabled: !!userId,
  });
}
