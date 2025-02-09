'use client';

import { useEffect } from 'react';
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
  isAdminPage?: boolean;
}

export default function CustomModal({
  children,
  isOpen,
  xButton = false,
  onClose,
  onNext,
  onPrev,
  isAdminPage,
}: CustomModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(); // ESC 키를 누르면 모달 닫기
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown); // keydown 이벤트 리스너 추가
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // 이벤트 리스너 제거
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#111111]/80`}
      onClick={onClose}
    >
      <div
        className={`relative h-[82vh] ${
          isAdminPage
            ? 'custom-scrollbar w-[780px] overflow-y-auto bg-white px-[36px]'
            : 'w-[1280px] bg-background-secondary px-[32px] md:px-[57px] lg:px-[82px] xl:px-[180px]'
        } rounded-lg`}
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
