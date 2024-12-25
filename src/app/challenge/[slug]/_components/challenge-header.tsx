'use client';
import { useSearchParams } from 'next/navigation';

export default function ChallengeHeader({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '임시 제목입니다';

  return (
    <header className="mb-10 rounded-3xl shadow-md md:mb-12 lg:mb-16">
      <img
        src="/assets/challenge/ui_challenge.webp"
        alt="ui challenge hero image"
        className="min-h-[130px] sm:min-h-[178px]"
      />
      <div className="px-8 py-5 md:px-14">
        <h2 className="text-lg font-semibold text-main-primary">
          #챌린지 {slug}
        </h2>
        <h1 className="mt-1 text-2xl font-semibold text-text-primary">
          {title}
        </h1>
        <ul className="mt-2 list-disc text-body text-gray-600">
          <li className="overflow-hidden truncate whitespace-nowrap before:mr-2 before:content-['•']">
            UX와 UI의 차이를 간단히 조사해 보세요.
          </li>
        </ul>
      </div>
    </header>
  );
}
