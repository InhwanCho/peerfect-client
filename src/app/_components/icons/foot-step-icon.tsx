import { cn } from '@/lib/utils';

interface FootStepIconProps {
  size?: { width: number; height: number };
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function FootStepIcon({
  size,
  color,
  className,
  children,
}: FootStepIconProps) {
  const { width = 70, height = 19 } = size || {};
  return (
    <div className={cn('overflow-visible relative', className)}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx={width / 2}
          cy={height / 2}
          rx={width / 2}
          ry={height / 2}
          fill={color || '#EEEEEE'}
        />
      </svg>
      {children}
    </div>
  );
}
