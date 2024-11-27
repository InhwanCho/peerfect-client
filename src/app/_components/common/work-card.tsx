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
      className="relative bg-background-secondary rounded-lg shadow overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="w-[280px] h-[280px] bg-background-tertiary"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-[18px] text-background-primary">
        <h3 className="text-sm font-semibold text-subtitle2">{work.title}</h3>
        <p className="pt-2 text-buttonS">
          <span className="text-main-primary pr-2">{work.designer}</span> {work.user}
        </p>
      </div>
    </div>
  );
}
