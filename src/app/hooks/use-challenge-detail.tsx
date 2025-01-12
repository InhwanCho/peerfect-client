import { useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';

interface ChallengeDetail {
  challengeGroup: string;
  challengeType: string;
  challengeIntro: string;
  challengeMission: string;
  challengeLevel: string;
  ruleDetail?: null;
}

export function useChallengeDetail(id: string, active: string) {
  return useQuery<ChallengeDetail>({
    queryKey: [`${id}-challenge-detail`, active],
    queryFn: async () => {
      const endpoint = `/api/challenges/${id}/detail`;
      const response = await apiClient.get(endpoint);
      return response.data;
    },
  });
}
