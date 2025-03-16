import ChallengeCard from '@/app/_components/common/challenge-card';
import H3Title from '@/app/_components/common/h3-title';
import { useUserStore } from '@/store/use-user-store';
import { useNextChallenge } from '@/hooks/use-next-challenge';
import { useChallengePreview } from '@/hooks/use-challenge-preview';

interface UpcomoingChallengesProps {
  select: 'UI' | 'UX';
}

export default function UpcomoingChallenges({
  select,
}: UpcomoingChallengesProps) {
  const { memberId, challengeInfo } = useUserStore();

  // ✅ challengeInfo가 있을 때만 useNextChallenge 실행
  const {
    data: nextChallenges,
    isLoading: isNextLoading,
    isError: isNextError,
  } = useNextChallenge(memberId || '', {
    enabled: !!challengeInfo && !!memberId,
  });

  // ✅ challengeInfo가 없을 때만 useChallengePreview 실행
  const {
    data: previewChallenges,
    isLoading: isPreviewLoading,
    isError: isPreviewError,
  } = useChallengePreview(select, {
    enabled: !challengeInfo || !memberId,
  });

  // 로딩 및 에러 상태 통합
  const isLoading =
    challengeInfo && memberId ? isNextLoading : isPreviewLoading;
  const isError = challengeInfo && memberId ? isNextError : isPreviewError;

  // 데이터 선택
  const challengesData =
    challengeInfo?.challengeNo && memberId ? nextChallenges : previewChallenges;

  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengesData) return <div>Error loading challenges</div>;

  return (
    <div className="my-20">
      <H3Title title="다가오는 챌린지" eyes={true} />
      <ChallengeCard select={select} challengesData={challengesData} />
    </div>
  );
}
