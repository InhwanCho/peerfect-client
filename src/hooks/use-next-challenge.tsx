import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface NextChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
}

export function useNextChallenge(userId: string) {
  return useQuery<NextChallengeData[]>({
    queryKey: ['nextChallenge', userId],
    queryFn: async () => {
      const endpoint = `/api/member/${userId}/next`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
    enabled: !!userId,
  });
}
