import ChallengeCard from '@/app/_components/common/challenge-card';
import H3Title from '@/app/_components/common/h3-title';
import { useCompletedChallenge } from '@/hooks/use-completed-challenge';
import { useUserStore } from '@/store/use-user-store';

interface CompletedChallengesProps {
  select: string;
}

export default function CompletedChallenges({
  select,
}: CompletedChallengesProps) {
  const { memberId } = useUserStore();
  const {
    data: completedData,
    isLoading,
    isError,
  } = useCompletedChallenge(memberId!);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !completedData) return <div>Error loading challenges</div>;

  return (
    <div className="py-20">
      <H3Title title="완료된 챌린지" />
      {completedData.length === 0 ? (
        <div className="flex w-full justify-center">
          <div className="flex h-[475px] w-[500px] flex-col items-center">
            <img
              src="/assets/challenges/not-completed.png"
              alt="not completed image"
            />
            <p className="text-h3 text-gray-900">
              완료한 챌린지가 아직 없어요...
            </p>
            <p className="mt-2.5 text-2xl font-medium text-gray-500">
              챌린지를 통해 우리 함께 실력을 키워볼까요?
            </p>
          </div>
        </div>
      ) : (
        <ChallengeCard
          completed
          select={select}
          challengesData={completedData}
        />
      )}
    </div>
  );
}
