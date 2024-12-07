'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import SvgArrowDown from '@/app/_components/icons/M/ArrowDown';
import SvgFilledStar from '@/app/_components/icons/S/FilledStar';

export default function UploadForm() {
  // 드롭다운, days, hours, 난이도(별)
  const [openDropdown, setOpenDropdown] = useState<'days' | 'hours' | null>(
    null
  );
  const [selectedDays, setSelectedDays] = useState<number | null>(null);
  const [selectedHours, setSelectedHours] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number>(5);

  const daysDropdownRef = useRef<HTMLDivElement | null>(null);
  const hoursDropdownRef = useRef<HTMLDivElement | null>(null);

  const daysOptions = useMemo(() => [...Array(8)], []);
  const hoursOptions = useMemo(() => [...Array(24)], []);

  const handleDropdownToggle = (dropdown: 'days' | 'hours') => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleSelect = (type: 'days' | 'hours', value: number) => {
    if (type === 'days') setSelectedDays(value);
    if (type === 'hours') setSelectedHours(value);
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
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex w-full select-none flex-col items-center justify-between gap-y-4 rounded-lg bg-white px-1 phone:flex-row phone:gap-y-0 2xl:w-[510px]">
      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <span className="text-sm text-gray-500">소요시간</span>
        {/* Days Dropdown */}
        <div ref={daysDropdownRef} className="relative w-[100px]">
          <div
            className={`flex h-[44px] cursor-pointer items-center justify-between rounded-2xl border px-3 text-sm ${
              selectedDays !== null
                ? 'border-main-primary text-text-primary'
                : 'border-gray-400 text-gray-400'
            }`}
            onClick={() => handleDropdownToggle('days')}
          >
            <span>
              {selectedDays !== null ? `${selectedDays} 일` : '직접입력'}
            </span>
            <SvgArrowDown isOpen={openDropdown === 'days'} />
          </div>
          {openDropdown === 'days' && (
            <ul className="card-container absolute top-[50px] z-10 max-h-[290px] w-full overflow-auto rounded-2xl bg-white">
              {daysOptions.map((_, i) => (
                <li
                  key={`days-${i}`}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleSelect('days', i)}
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
            className={`flex h-[44px] cursor-pointer items-center justify-between rounded-2xl border px-3 text-sm ${
              selectedHours !== null
                ? 'border-main-primary text-text-primary'
                : 'border-gray-400 text-gray-400'
            }`}
            onClick={() => handleDropdownToggle('hours')}
          >
            <span>
              {selectedHours !== null ? `${selectedHours} 시간` : '직접입력'}
            </span>
            <SvgArrowDown isOpen={openDropdown === 'hours'} />
          </div>
          {openDropdown === 'hours' && (
            <ul className="card-container absolute top-[50px] z-10 max-h-[290px] w-full overflow-auto rounded-2xl bg-white">
              {hoursOptions.map((_, i) => (
                <li
                  key={`hours-${i}`}
                  className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                  onClick={() => handleSelect('hours', i)}
                >
                  {i} 시간
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 난이도 */}
      <div className="mt-4 flex items-center gap-x-2 phone:mt-0 sm:gap-x-4">
        <span className="text-sm text-text-secondary">난이도</span>
        <div className="flex gap-x-1">
          {[...Array(5)].map((_, i) => (
            <SvgFilledStar
              key={i}
              className="cursor-pointer"
              filledColor={i < selectedDifficulty ? undefined : '#E0E0E0'}
              props={{ onClick: () => handleStarClick(i) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
