import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Link from 'next/link';

export const cards = [
  {
    id: 1,
    day: '1',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '로그인 / 회원가입 페이지',
    participants: 'n',
  },
  {
    id: 2,
    day: '2',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: 'HMW statement',
    participants: 'n',
  },
  {
    id: 3,
    day: '3',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '사용자 페르소나 작성',
    participants: 'n',
  },
  {
    id: 4,
    day: '4',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '대시보드 UI 만들기',
    participants: 'n',
  },
  {
    id: 5,
    day: '5',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '대시보드 UX 수정하기',
    participants: 'n',
  },
  {
    id: 6,
    day: '6',
    description:
      '챌린지 간단 소개글을 입력해주세요. 챌린지 간단 소개글을 입력해주세요.',
    title: '대시보드',
    participants: 'n',
  },
];

interface ChallengeCardProps {
  completed?: boolean;
}

export default function ChallengeCard({ completed }: ChallengeCardProps) {
  return (
    <div className="relative">
      <div className="flex w-full overflow-x-auto bg-white pb-10">
        {cards.map((card, index) => (
          <Link
            //index자리에 카테고리(ui, ux)로 넣기
            href={`/challenge/${index}`}
            key={card.id}
            className={`relative max-w-[260px] shrink-0 snap-start rounded-2xl shadow-card ${
              index === cards.length - 1 ? 'mr-8' : 'mr-4'
            }`}
          >
            <div className={`relative ${completed && 'image-blur'}`}>
              <img
                src={`/assets/home/ux-m/ux-m-day${Number(index) + 1}.png`}
                alt="challenge card image"
              />
              {completed && (
                <img
                  src="/assets/challenges/completed-stamp.png"
                  alt="completed stamp image"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ width: '65%' }}
                />
              )}
            </div>

            <article className="p-5">
              <h4 className="mb-4 text-lg font-bold text-black">
                {card.title}
              </h4>
              <p className="mb-4 text-[13px] text-gray-600">
                {card.description}
              </p>
              <div className="flex justify-end text-sm font-semibold text-gray-400">
                <img
                  src="/assets/home/user.png"
                  alt="user image"
                  className="size-[18px]"
                />
                <span className="text-gray-900">{card.participants}명</span>
                <span className="pl-1.5 text-main-primary">참가 중</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
