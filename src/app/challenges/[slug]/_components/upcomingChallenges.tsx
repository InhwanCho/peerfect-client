import ChallengeCard from '@/app/_components/common/challenge-card';
import H3Title from '@/app/_components/common/h3-title';
import { useUserStore } from '@/store/use-user-store';
import { useNextChallenge } from '@/hooks/use-next-challenge';

interface UpcomoingChallengesProps {
  select: 'UI' | 'UX';
}

export default function UpcomoingChallenges({
  select,
}: UpcomoingChallengesProps) {
  const { memberId } = useUserStore();
  const {
    data: challengesData,
    isLoading,
    isError,
  } = useNextChallenge(memberId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengesData) return <div>Error loading challenges</div>;

  return (
    <div className="my-20">
      <H3Title title="다가오는 챌린지" eyes={true} />
      <ChallengeCard select={select} challengesData={challengesData} />
    </div>
  );
}
