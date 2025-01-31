import H3Title from '@/app/_components/common/h3-title';
import { useMainChallenge } from '@/hooks/use-main-challenge';
import { useUserStore } from '@/store/use-user-store';
import Link from 'next/link';

interface MainChallengeProps {
  select: string;
}

export default function MainChallenge({ select }: MainChallengeProps) {
  const { memberId } = useUserStore();
  const {
    data: challengeData,
    isLoading,
    isError,
  } = useMainChallenge(memberId!);
  console.log('challengeData :', challengeData);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengeData) return <div>Error loading challenge</div>;
  return (
    <Link href={`/challenge/${challengeData.challengeNo}?active=${select}`}>
      <H3Title title="메인 챌린지" />
      <article className="w-full rounded-2xl shadow-card">
        <img
          src={`/assets/home/ux-xl/ux-xl-day${challengeData.challengeNo}.png`}
          alt="ux card image"
        />
        <div className="flex flex-col gap-y-4 px-[30px] py-5">
          <h4 className="text-subtitle1">{challengeData?.challengeTitle}</h4>
          <li className="text-body text-gray-600">
            {challengeData?.challengeShortIntro}
          </li>
          <div className="flex justify-end text-sm font-semibold text-gray-400">
            <img
              src="/assets/home/user.png"
              alt="user image"
              className="size-[18px]"
            />
            <span className="text-gray-900">nn 명</span>
            <span className="pl-1.5 text-main-primary">참가 중</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
