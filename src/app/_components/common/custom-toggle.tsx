'use client';

interface CustomToggleProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function CustomToggle({ isActive, onToggle }: CustomToggleProps) {
  return (
    <div
      onClick={onToggle}
      className={`w-[80px] h-[42px] rounded-full flex items-center px-[4px] cursor-pointer transition-colors ${
        isActive ? 'bg-main-primary' : 'bg-gray-200'
      }`}
    >
      <div
        className={`w-[34px] h-[34px] bg-background-primary rounded-full shadow-md transform transition-transform ${
          isActive ? 'translate-x-[38px]' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
}
