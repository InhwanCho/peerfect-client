'use client';

interface WorkCardProps {
  work: {
    id: number;
    title: string;
    designer: string;
    user: string;
  };
  onClick?: () => void;
}

export default function WorkCard({ work, onClick }: WorkCardProps) {
  return (
    <div
      key={work.id}
      className="relative cursor-pointer overflow-hidden rounded-2xl bg-transparent"
      onClick={onClick}
    >
      {/* 이미지 또는 배경 */}
      <div
        className="h-[180px] sm:h-[220px] lg:h-[280px] rounded-lg overflow-hidden"
        style={{
          background: `
      linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0)),
      url('/assets/challenge/check-pattern.png')
    `,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* 텍스트 섹션 */}
      <div className="absolute bottom-4 left-[18px]">
        <h3 className="text-subtitle2 font-semibold text-white">
          {work.title}
        </h3>
        <p className="pt-2 text-buttonS">
          <span className="pr-2 text-main-primary">{work.designer}</span>{' '}
          <span className="text-white">{work.user}</span>
        </p>
      </div>
    </div>
  );
}
