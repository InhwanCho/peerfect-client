/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import FootStepIcon from '@/app/_components/icons/foot-step-icon';

export default function MyChallengeRoadMap() {
  const day = 8; // 현재 진행 중인 day (예: 7)
  const footsteps = [
    { id: 1, left: 72, top: 167, size: { width: 53, height: 10 } },
    { id: 2, left: 202, top: 153, size: { width: 87, height: 19 } },
    { id: 3, left: 359, top: 181, size: { width: 70, height: 18 } },
    { id: 4, left: 495, top: 162, size: { width: 70, height: 19 } },
    { id: 5, left: 640, top: 181, size: { width: 70, height: 19 } },
    { id: 6, left: 605, top: 275, size: { width: 59, height: 15 } },
    { id: 7, left: 460, top: 323, size: { width: 105, height: 19 } },
    { id: 8, left: 331, top: 349, size: { width: 70, height: 19 } },
    { id: 9, left: 186, top: 395, size: { width: 88, height: 19 } },
    { id: 10, left: 72, top: 469, size: { width: 70, height: 19 } },
    { id: 11, left: 167, top: 549, size: { width: 70, height: 19 } },
    { id: 12, left: 313, top: 553, size: { width: 81, height: 19 } },
    { id: 13, left: 471, top: 585, size: { width: 70, height: 19 } },
    { id: 14, left: 617, top: 583, size: { width: 162, height: 17 } },
  ];

  return (
    <section className="card-container relative h-[664px] w-full flex-1 rounded-2xl bg-background-primary px-16 pb-20">
      <h4 className="pt-12 text-h4">나의 챌린지 과정</h4>

      {/* 발판 렌더링 */}
      {footsteps.map(({ id, left, top, size }) => (
        <div
          key={id}
          className="absolute"
          style={{
            top: `${top}px`,
            left: `${left + 20}px`,
          }}
        >
          <FootStepIcon
            className="relative overflow-visible"
            color={id <= day ? 'black' : '#EEEEEE'}
            size={size}
          >
            {/* 완료된 발판에 completed-img 추가 */}
            {id < day && (
              <img
                src="/assets/mypage/completed-img.png"
                alt="completed img"
                style={{
                  minWidth: size.width * 2,
                  bottom: -size.width * 0.53,
                }}
                className="absolute left-[50%] translate-x-[-50%]"
              />
            )}
            {id < day && (
              <p
                style={{
                  bottom: `-${size.width * 0.4}px`, // 이미지 아래로 살짝 이동
                }}
                className="absolute left-[50%] translate-x-[-50%] translate-y-[50%] text-nowrap text-center font-semibold"
              >
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
                className="absolute -bottom-1 left-[50%] translate-x-[-50%]"
              />
            )}
          </FootStepIcon>
        </div>
      ))}
    </section>
  );
}
