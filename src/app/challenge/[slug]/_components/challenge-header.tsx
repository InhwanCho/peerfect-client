'use client';

import { useChallengePreview } from '@/app/hooks/use-challenge-preview';
import { useSearchParams } from 'next/navigation';

export default function ChallengeHeader({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const active = searchParams.get('active') || 'ux';

  const {
    data: challengesData,
    isLoading,
    isError,
  } = useChallengePreview(active);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !challengesData) return <div>Error loading challenges</div>;

  const challenge = challengesData.find(
    (item) => item.challengeNo.toString() === slug
  );

  if (!challenge)
    return <div>Error: Challenge not found for challengeNo {slug}</div>;

  const slugNumber = Number(slug); // slug를 숫자로 변환
  // TODO: detail에서 값 가져와야됨
  const challengeIntroSentences = challenge.challengeShortIntro
    .split('.') // 점(`.`)을 기준으로 나눔
    .map((sentence) => sentence.trim()) // 각 문장의 양쪽 공백 제거
    .filter((sentence) => sentence.length > 0); // 빈 문자열 필터링

  return (
    <header className="mb-10 rounded-3xl shadow-md md:mb-12 lg:mb-[78px]">
      <img
        src={`/assets/home/${active}-xl/${active}-xl-day3.png`}
        alt="ui challenge hero image"
        className="min-h-[130px] sm:min-h-[178px]"
      />
      <div className="px-8 py-5 md:px-14">
        <h2 className="text-lg font-semibold text-main-primary">
          #챌린지 {slugNumber > 14 ? slugNumber - 14 : slugNumber}
        </h2>
        <h1 className="mt-1 text-2xl font-semibold text-text-primary">
          {challenge.challengeTitle}
        </h1>
        <ul className="mt-2 list-disc text-body text-gray-600">
          {challengeIntroSentences.map((sentence, index) => (
            <li
              key={index}
              className="overflow-hidden truncate whitespace-nowrap before:mr-2 before:content-['•']"
            >
              {sentence}.
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
