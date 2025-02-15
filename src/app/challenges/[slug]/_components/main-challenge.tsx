import H3Title from '@/app/_components/common/h3-title';
import { useMainChallenge } from '@/hooks/use-main-challenge';
import { useChallengePreview } from '@/hooks/use-challenge-preview';
import { useUserStore } from '@/store/use-user-store';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface MainChallengeProps {
  select: string;
}

export default function MainChallenge({ select }: MainChallengeProps) {
  const { memberId, challengeInfo } = useUserStore();
  const searchParams = useSearchParams();
  const day = Number(searchParams.get('day'));

  // challengeInfo가 있을 때만 useMainChallenge 호출
  const {
    data: mainChallengeData,
    isLoading: isMainChallengeLoading,
    isError: isMainChallengeError,
  } = useMainChallenge(memberId || '', {
    enabled: !!challengeInfo && !!memberId,
  });
  const {
    data: previewChallenges,
    isLoading: isPreviewLoading,
    isError: isPreviewError,
  } = useChallengePreview(select);

  // 불필요한 API 요청을 방지하기 위해 useMainChallenge를 enabled 상태로 제한
  const isLoading =
    challengeInfo && memberId ? isMainChallengeLoading : isPreviewLoading;
  const isError =
    challengeInfo && memberId ? isMainChallengeError : isPreviewError;

  // 올바른 데이터 선택
  const challengeData =
    challengeInfo && memberId ? mainChallengeData : previewChallenges?.[0];

  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengeData) return <div>Error loading challenge</div>;

  return (
    <>
      <H3Title title="메인 챌린지" />
      <Link href={`/challenge/${challengeData.challengeNo}?active=${select}`}>
        <article className="w-full rounded-2xl shadow-card">
          <img
            src={`/assets/home/${select.toLowerCase()}-xl/${select.toLowerCase()}-xl-day${day}.png`}
            alt="challenge card image"
          />
          <div className="flex flex-col gap-y-4 px-[30px] py-5">
            <h4 className="text-subtitle1">{challengeData.challengeTitle}</h4>
            <li className="text-body text-gray-600">
              {challengeData.challengeShortIntro}
            </li>
            <div className="flex justify-end text-sm font-semibold text-gray-400">
              <img
                src="/assets/home/user.png"
                alt="user image"
                className="size-[18px]"
              />
              <span className="pl-1 text-gray-900">
                {challengeData.memberCount} 명
              </span>
              <span className="pl-1.5 text-main-primary">참가 중</span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
