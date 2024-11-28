'use client';

import SvgX from "@/app/_components/icons/M/X";
import SvgLeft from "@/app/_components/icons/XL/Left";
import SvgRight from "@/app/_components/icons/XL/Right";

interface CustomModalProps {
  isOpen: boolean;
  xButton?: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  children?: React.ReactNode
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
      className="fixed inset-0 bg-[#111111]/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-background-secondary rounded-lg h-[80vh] px-[180px] w-[1280px]"
        onClick={(e) => e.stopPropagation()}
      >
        {xButton && <button
          className="absolute top-4 right-4 text-text-primary text-2xl"
          onClick={onClose}
        >
          <SvgX />
        </button>}
        {children}

        {onPrev && onNext &&
          <>
            <button
              className="absolute -left-[120px] top-1/2 transform -translate-y-1/2 text-text-primary text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              <SvgLeft width={80} height={80} />
            </button>
            <button
              className="absolute right-[-120px] top-1/2 transform -translate-y-1/2 text-text-primary text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              <SvgRight width={80} height={80} />
            </button>
          </>
        }
      </div>
    </div>
  );
}
