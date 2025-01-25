import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface ChallengeData {
  challengeNo: number;
  challengeShortIntro: string;
  challengeTitle: string;
  memberCount: number;
}

export function useChallengePreview(select: string) {
  return useQuery<ChallengeData[]>({
    queryKey: [`${select}PreviewChallenges`],
    queryFn: async () => {
      const endpoint = `/api/challenges/${select.toLowerCase()}-preview`;
      const response = await apiClient.get(endpoint);
      console.log('response :', response);
      return response.data;
    },
  });
}
