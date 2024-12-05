'use client';

interface ProgressBarProps {
  activeDay: number; // 현재 활성화된 날짜
}

export default function ProgressBar({ activeDay }: ProgressBarProps) {
  const totalDays = 14;

  return (
    <div className="relative w-full text-white">
      {/* 프로그래스 바 */}
      <svg
        width="100%"
        height="34"
        viewBox="-20 0 1320 34" // 좌우 여유 공간 추가(20px)
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        {/* 라인 */}
        <rect y="16" width="1280" height="3" rx="1.5" fill="#B5B5B5" />

        {/* 점 생성 */}
        {Array.from({ length: totalDays }, (_, index) => {
          const isActive = activeDay === index + 1;
          const x = (index * 1280) / (totalDays - 1);
          const fill = isActive ? '#8530F1' : '#1E1E1E';
          const stroke = isActive ? '#8530F1' : '#B5B5B5';
          const textColor = isActive ? '#FFFFFF' : '#B5B5B5';

          return (
            <g key={index}>
              <circle cx={x} cy="17" r="16.9735" fill={fill} stroke={stroke} />
              <text
                x={x}
                y="22"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill={textColor}
              >
                {index + 1}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 캐릭터 아이콘 */}
      <img
        src="/assets/challenges/character-w-mask.png"
        alt="character icon"
        className="absolute top-[-40px] h-[40px] "
        style={{
          left: `calc((100% / 13.4) * ${activeDay - 1})`, // 정확한 위치 계산
        }}
      />
    </div>
  );
}
