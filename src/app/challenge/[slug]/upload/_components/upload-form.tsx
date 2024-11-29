'use client';
import React, { useState, useEffect, useRef, useMemo } from "react";
import SvgArrowDown from "@/app/_components/icons/M/ArrowDown";
import SvgFilledStar from "@/app/_components/icons/S/FilledStar";

export default function UploadForm() {
  // 드롭다운, days, hours, 난이도(별)
  const [openDropdown, setOpenDropdown] = useState<"days" | "hours" | null>(null);
  const [selectedDays, setSelectedDays] = useState<number | null>(null);
  const [selectedHours, setSelectedHours] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(5);

  const daysDropdownRef = useRef<HTMLDivElement | null>(null);
  const hoursDropdownRef = useRef<HTMLDivElement | null>(null);

  const daysOptions = useMemo(() => [...Array(8)], []);
  const hoursOptions = useMemo(() => [...Array(24)], []);


  const handleDropdownToggle = (dropdown: "days" | "hours") => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleSelect = (type: "days" | "hours", value: number) => {
    if (type === "days") setSelectedDays(value);
    if (type === "hours") setSelectedHours(value);
    setOpenDropdown(null);
  };

  // 별 선택
  const handleStarClick = (index: number) => {
    setSelectedDifficulty(index + 1);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !daysDropdownRef.current?.contains(event.target as Node) &&
        !hoursDropdownRef.current?.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full 2xl:w-[510px] select-none bg-white rounded-lg flex flex-col phone:flex-row justify-between items-center px-1 gap-y-4 phone:gap-y-0">
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <span className="text-gray-500 text-sm">소요시간</span>
        {/* Days Dropdown */}
        <div ref={daysDropdownRef} className="relative w-[100px]">
          <div
            className={`h-[44px] px-3 flex items-center justify-between border rounded-2xl cursor-pointer text-sm ${selectedDays !== null
              ? "border-main-primary text-text-primary"
              : "border-gray-400 text-gray-400"
              }`}
            onClick={() => handleDropdownToggle("days")}
          >
            <span>{selectedDays !== null ? `${selectedDays} 일` : "직접입력"}</span>
            <SvgArrowDown />
          </div>
          {openDropdown === "days" && (
            <ul className="absolute top-[50px] w-full card-container rounded-2xl bg-white z-10 max-h-[290px] overflow-auto">
              {daysOptions.map((_, i) => (
                <li
                  key={`days-${i}`}
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
        <div ref={hoursDropdownRef} className="relative w-[100px]">
          <div
            className={`h-[44px] px-3 flex items-center justify-between border rounded-2xl cursor-pointer text-sm ${selectedHours !== null
              ? "border-main-primary text-text-primary"
              : "border-gray-400 text-gray-400"
              }`}
            onClick={() => handleDropdownToggle("hours")}
          >
            <span>{selectedHours !== null ? `${selectedHours} 시간` : "직접입력"}</span>
            <SvgArrowDown />
          </div>
          {openDropdown === "hours" && (
            <ul className="absolute top-[50px] w-full card-container rounded-2xl bg-white z-10 max-h-[290px] overflow-auto">
              {hoursOptions.map((_, i) => (
                <li
                  key={`hours-${i}`}
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

      {/* 난이도 */}
      <div className="flex gap-x-2 sm:gap-x-4 items-center phone:mt-0 mt-4">
        <span className="text-text-secondary text-sm">난이도</span>
        <div className="flex gap-x-1">
          {[...Array(5)].map((_, i) => (
            <SvgFilledStar
              key={i}
              className="cursor-pointer"
              filledColor={i < selectedDifficulty ? undefined : "#E0E0E0"}
              props={{ onClick: () => handleStarClick(i) }}
            />
          ))}
        </div>
      </div>
    </div>

  );
}
