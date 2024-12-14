'use client';

interface CustomToggleProps {
  isActive: boolean;
  onToggle: () => void;
  variant?: 'switch' | 'button';
  activeText?: string; // 버튼 스타일: 활성화된 텍스트
  inactiveText?: string; // 버튼 스타일: 비활성화된 텍스트
}

export default function CustomToggle({
  isActive,
  onToggle,
  variant = 'switch',
  activeText,
  inactiveText,
}: CustomToggleProps) {
  if (variant === 'button') {
    return (
      <div className="flex select-none items-center justify-center py-10 md:py-[68px]">
        <div
          className={`relative flex h-[46px] w-[256px] items-center rounded-full bg-gray-300 transition-colors duration-200`}
          onClick={onToggle}
        >
          {/* 이동하는 버튼 ui */}
          <div
            className={`absolute h-[36px] w-[125px] rounded-full bg-background-primary shadow-md transition-transform duration-200 ${
              isActive ? 'translate-x-[5px]' : 'translate-x-[125px]'
            }`}
          ></div>
          {/* 활성화 텍스트 */}
          <span
            className={`absolute left-[24px] font-semibold ${
              isActive ? 'text-gray-900' : 'text-gray-500'
            } transition-colors duration-300`}
          >
            {activeText}
          </span>
          {/* 비활성화 텍스트 */}
          <span
            className={`absolute right-[48px] font-semibold ${
              !isActive ? 'text-gray-900' : 'text-gray-500'
            } transition-colors duration-300`}
          >
            {inactiveText}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onToggle}
      className={`flex h-[42px] w-[80px] cursor-pointer items-center rounded-full px-[4px] transition-colors duration-300 ${
        isActive ? 'bg-main-primary' : 'bg-gray-200'
      }`}
    >
      <div
        className={`size-[34px] rounded-full bg-background-primary shadow-md transition-transform duration-300 ${
          isActive ? 'translate-x-[38px]' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
}
