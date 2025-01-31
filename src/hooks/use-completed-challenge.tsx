import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface CompletedChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
}

export function useCompletedChallenge(userId: string) {
  return useQuery<CompletedChallengeData[]>({
    queryKey: ['CompletedChallenge', userId],
    queryFn: async () => {
      const endpoint = `/api/member/${userId}/complete`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
    enabled: !!userId,
  });
}
