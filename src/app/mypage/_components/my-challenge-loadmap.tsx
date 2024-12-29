/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import FootStepIcon from '@/app/_components/icons/foot-step-icon';

export default function MyChallengeRoadMap() {
  const day = 8; // 현재 진행 중인 day (예: 8)
  const footsteps = [
    { id: 1, left: 8.57, top: 167 },
    { id: 2, left: 24.05, top: 153 },
    { id: 3, left: 42.74, top: 181 },
    { id: 4, left: 58.93, top: 162 },
    { id: 5, left: 76.19, top: 181 },
    { id: 6, left: 72.02, top: 275 },
    { id: 7, left: 54.76, top: 323 },
    { id: 8, left: 39.4, top: 349 },
    { id: 9, left: 22.14, top: 395 },
    { id: 10, left: 8.57, top: 469 },
    { id: 11, left: 19.88, top: 549 },
    { id: 12, left: 37.26, top: 553 },
    { id: 13, left: 56.07, top: 585 },
    { id: 14, left: 73.45, top: 583 },
  ];

  return (
    <section className="card-container relative h-[664px] w-full flex-1 rounded-2xl bg-background-primary px-16 pb-20">
      <h4 className="pt-12 text-h4">나의 챌린지 과정</h4>

      {/* 발판 렌더링 */}
      {footsteps.map(({ id, left, top }) => (
        <div
          key={id}
          className="absolute"
          style={{
            top: `${top}px`,
            left: `${left}%`,
          }}
        >
          <FootStepIcon
            className="relative overflow-visible"
            color={id <= day ? 'black' : '#EEEEEE'}
            size={{ width: 70, height: 19 }}
          >
            {/* 완료된 발판에 completed-img 추가 */}
            {id < day && (
              <img
                src="/assets/mypage/completed-img.png"
                alt="completed img"
                className="absolute -bottom-[32px] left-[50%] w-20 min-w-[100px] translate-x-[-50%]"
              />
            )}
            {id < day && (
              <p className="absolute -bottom-8 left-[50%] translate-x-[-50%] translate-y-[50%] text-nowrap text-center font-semibold">
                2024-11-01
              </p>
            )}
            {/* 현재 날짜 발판에 캐릭터 추가 */}
            {id === day && (
              <img
                src="/assets/challenges/character-w-band.png"
                alt="character"
                className="absolute bottom-5 left-[50%] w-16 translate-x-[-50%]"
              />
            )}
            {/* 마지막 발판에 finish-img 추가 */}
            {id === 14 && (
              <img
                src="/assets/mypage/finish-img.png"
                alt="finish"
                className="absolute -bottom-1 left-[50%] min-w-[130px] translate-x-[-50%] lg:min-w-[184px]"
              />
            )}
          </FootStepIcon>
        </div>
      ))}
    </section>
  );
}
