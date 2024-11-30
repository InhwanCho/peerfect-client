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
      className="relative cursor-pointer overflow-hidden rounded-lg bg-background-secondary shadow"
      onClick={onClick}
    >
      <div className="size-[280px] bg-gray-400"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-[18px] text-background-primary">
        <h3 className="text-subtitle2 font-semibold">{work.title}</h3>
        <p className="pt-2 text-buttonS">
          <span className="pr-2 text-main-primary">{work.designer}</span>{' '}
          {work.user}
        </p>
      </div>
    </div>
  );
}
