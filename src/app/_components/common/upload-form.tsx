'use client';
import React, { useState, useEffect, useRef } from "react";
import SvgArrowDown from "@/app/_components/icons/M/ArrowDown";
import SvgFilledStar from "@/app/_components/icons/S/FilledStar";

export default function UploadForm() {
  const [openDropdown, setOpenDropdown] = useState<"days" | "hours" | null>(null);
  const [selectedDays, setSelectedDays] = useState<number>(0);
  const [selectedHours, setSelectedHours] = useState<number>(0);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleDropdownToggle = (dropdown: "days" | "hours") => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleSelect = (type: "days" | "hours", value: number) => {
    if (type === "days") setSelectedDays(value);
    if (type === "hours") setSelectedHours(value);
    setOpenDropdown(null); // 드롭다운 닫기
  };

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 이벤트 타겟이 dropdownRef 내부 요소에 포함되지 않는 경우
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null); // 드롭다운 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full 2xl:w-[510px] bg-white rounded-lg flex justify-between items-center">
      {/* 소요 시간 */}
      <div className="flex items-center gap-x-4" ref={dropdownRef}>
        <span className="text-gray-500 text-sm">소요시간</span>
        {/* Days Dropdown */}
        <div className="relative w-[100px]">
          <div
            className="h-[44px] px-3 flex items-center justify-between border border-gray-400 rounded-2xl cursor-pointer text-sm text-gray-400"
            onClick={() => handleDropdownToggle("days")}
          >
            <span>{selectedDays} 일</span>
            <SvgArrowDown />
          </div>
          {openDropdown === "days" && (
            <ul className="absolute top-[50px] w-full card-container rounded-2xl bg-white z-10 max-h-80 overflow-auto">
              {[...Array(8)].map((_, i) => (
                <li
                  key={i}
                  className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect("days", i)}
                >
                  {i} 일
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Hours Dropdown */}
        <div className="relative w-[100px]">
          <div
            className="h-[44px] px-3 flex items-center justify-between border border-gray-400 rounded-2xl cursor-pointer text-sm text-gray-400"
            onClick={() => handleDropdownToggle("hours")}
          >
            <span>{selectedHours} 시간</span>
            <SvgArrowDown />
          </div>
          {openDropdown === "hours" && (
            <ul className="absolute top-[50px] w-full card-container rounded-2xl bg-white z-10 max-h-80 overflow-auto">
              {[...Array(13)].map((_, i) => (
                <li
                  key={i}
                  className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect("hours", i)}
                >
                  {i} 시간
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
      <div className="flex gap-x-4">
        <span className="text-text-secondary text-sm">난이도</span>
        <div className="flex gap-x-1">
          {[...Array(5)].map((_, i) => (
            <SvgFilledStar key={i} className="cursor-pointer"/>
          ))}
        </div>
      </div>
    </div>
  );
}