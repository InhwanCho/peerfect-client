import ChallengeCard from '@/_components/common/challenge-card';
import H3Title from '@/_components/common/home-title';

interface CompletedChallengesProps {
  isNoCard?: boolean; //임시
}

export default function CompletedChallenges({
  isNoCard,
}: CompletedChallengesProps) {
  return (
    <div className="py-20">
      <H3Title title="완료된 챌린지" />
      {isNoCard ? (
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
        <ChallengeCard completed />
      )}
    </div>
  );
}
