'use client';

import SvgX from '@/app/_components/icons/M/X';
import SvgLeft from '@/app/_components/icons/XL/Left';
import SvgRight from '@/app/_components/icons/XL/Right';

interface CustomModalProps {
  isOpen: boolean;
  xButton?: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  children?: React.ReactNode;
}

export default function CustomModal({
  children,
  isOpen,
  xButton = false,
  onClose,
  onNext,
  onPrev,
}: CustomModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80"
      onClick={onClose}
    >
      <div
        className="relative h-[82vh] w-[1280px] rounded-lg bg-background-secondary px-[32px] md:px-[57px] lg:px-[82px] xl:px-[180px]"
        onClick={(e) => e.stopPropagation()}
      >
        {xButton && (
          <button
            className="absolute right-4 top-4 text-2xl text-text-primary"
            onClick={onClose}
            aria-label="close button"
          >
            <SvgX />
          </button>
        )}
        {children}

        {onPrev && onNext && (
          <>
            <button
              className="absolute -left-[120px] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="prev button"
            >
              <SvgLeft props={{ width: 80, height: 80 }} />
            </button>
            <button
              className="absolute right-[-120px] top-1/2 -translate-y-1/2 text-3xl text-text-primary"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="next button"
            >
              <SvgRight props={{ width: 80, height: 80 }} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
