'use client';

import { useState } from 'react';
import SvgArrowDown from '@/app/_components/icons/M/ArrowDown';

interface DropdownFilterProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  galleryPage?: boolean;
}

export default function DropdownFilter({
  galleryPage,
  options,
  selectedOption,
  onSelect,
}: DropdownFilterProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    onSelect(option); // 부모 컴포넌트에 선택된 값 전달
    setIsDropdownOpen(false); // 드롭다운 닫기
  };

  return (
    <div className="relative">
      <button
        className="relative flex items-center px-6"
        onClick={handleDropdownToggle}
        aria-label="dropdown button"
      >
        <span className="pr-9 text-body text-text-primary">
          {selectedOption}
        </span>
        <SvgArrowDown isOpen={isDropdownOpen} filledColor="#222222" />
      </button>
      {isDropdownOpen && (
        <ul className="card-container absolute right-0 top-[52px] z-50 w-[150px] rounded-2xl border bg-background-primary text-left transition-colors">
          {options.map((option) => (
            <li
              key={option}
              className={`cursor-pointer py-3 ${galleryPage ? 'pl-8' : 'pl-[33px]'} hover:text-main-primary`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
