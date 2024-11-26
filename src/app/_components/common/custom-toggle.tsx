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
      <div className="flex justify-center items-center py-10">
        <div
          className={`relative flex items-center rounded-full bg-gray-300 w-[256px] h-[46px] transition-colors duration-300`}
          onClick={onToggle}
        >
          {/* 이동하는 버튼 ui */}
          <div
            className={`absolute w-[125px] h-[36px] bg-background-primary shadow-md rounded-full transition-transform duration-300 transform ${isActive ? 'translate-x-[5px]' : 'translate-x-[125px]'
              }`}
          ></div>
          {/* 활성화 텍스트 */}
          <span
            className={`absolute left-[24px] font-semibold ${isActive ? 'text-gray-900' : 'text-gray-500'
              } transition-colors duration-300`}
          >
            {activeText}
          </span>
          {/* 비활성화 텍스트 */}
          <span
            className={`absolute right-[48px] font-semibold ${!isActive ? 'text-gray-900' : 'text-gray-500'
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
      className={`w-[80px] h-[42px] rounded-full flex items-center px-[4px] cursor-pointer transition-colors duration-300 ${isActive ? 'bg-main-primary' : 'bg-gray-200'
        }`}
    >
      <div
        className={`w-[34px] h-[34px] bg-background-primary rounded-full shadow-md transform transition-transform duration-300 ${isActive ? 'translate-x-[38px]' : 'translate-x-0'
          }`}
      ></div>
    </div>
  );
}
