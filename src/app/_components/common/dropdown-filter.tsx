'use client';

import { useState } from "react";
import SvgArrowDown from "@/app/_components/icons/M/ArrowDown";

interface DropdownFilterProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  galleryPage?:boolean
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
        className="flex items-center relative px-6"
        onClick={handleDropdownToggle}
      >
        <span className="pr-9 text-text-primary text-body">{selectedOption}</span>
        <SvgArrowDown isOpen={isDropdownOpen} filledColor="#222222" />
      </button>
      {isDropdownOpen && (
        <ul className="absolute right-0 top-[52px] text-left transition-colors bg-background-primary border card-container rounded-2xl w-[150px] z-50">
          {options.map((option) => (
            <li
              key={option}
              className={`py-3 cursor-pointer ${galleryPage? 'pl-8':'pl-[33px]'} hover:text-main-primary`}
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
