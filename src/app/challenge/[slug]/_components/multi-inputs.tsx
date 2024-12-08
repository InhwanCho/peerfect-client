'use client';

import SvgCheck from '@/_components/icons/M/Check';
import SvgX from '@/_components/icons/M/X';
import { cn } from '@/lib/utils';
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

export default function MultiInputs() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = useMemo(() => ['Figma', 'Sketch', 'Illustrator'], []);

  const toggleValue = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
    setInputValue('');
    setActiveIndex(-1);
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const filteredOptions = options.filter(
        (opt) =>
          !selectedValues.includes(opt) &&
          opt.toLowerCase().includes(inputValue.toLowerCase())
      );

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) =>
            Math.min(prev + 1, filteredOptions.length - 1)
          );
          break;

        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => Math.max(prev - 1, 0));
          break;

        case 'Enter':
          e.preventDefault();
          if (activeIndex >= 0 && filteredOptions[activeIndex]) {
            toggleValue(filteredOptions[activeIndex]);
          }
          break;

        case 'Escape':
          setIsDropdownOpen(false);
          break;

        case 'Backspace':
          if (inputValue === '' && selectedValues.length > 0) {
            setSelectedValues((prev) => prev.slice(0, -1));
          }
          break;
      }
    },
    [options, selectedValues, inputValue, activeIndex]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsDropdownOpen(true);
    setActiveIndex(-1);
  };

  const handleOptionClick = (value: string) => {
    toggleValue(value);
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative w-full select-none text-sm">
      <div
        className={cn(
          'flex flex-wrap gap-1.5 p-1 py-2.5 ring-1 ring-gray-400 focus:ring-main-primary h-[70px] rounded-2xl bg-background',
          {
            'ring-1 focus-within:ring-main-primary': activeIndex === -1,
          },
          {
            'ring-main-primary':
              Array.isArray(selectedValues) && selectedValues.length > 0,
          }
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {/* 셀렉된 메뉴 */}
        {selectedValues.map((value) => (
          <div
            key={value}
            className="ml-2 flex items-center rounded-xl bg-main-primary px-2 py-1 text-white"
          >
            {value}
            <button
              onClick={() => toggleValue(value)}
              className="ml-2 focus:outline-none"
            >
              <span className="sr-only">Remove {value} option</span>
              <SvgX className="size-3.5 " filledColor="#fff" />
            </button>
          </div>
        ))}
        {/* 인풋 */}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsDropdownOpen(true)}
          className="flex-1 border-none pl-4 outline-none placeholder:text-sm placeholder:text-gray-400 "
          placeholder="사용한 툴을 선택해 주세요."
        />
      </div>
      {/* 드롭다운 */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute inset-x-0 z-10 mt-3 max-h-48 overflow-auto rounded-2xl border border-gray-300 bg-white shadow-lg"
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className={cn(
                  'flex cursor-pointer items-center justify-between px-4 py-3',
                  {
                    'bg-gray-100': index === activeIndex,
                    'hover:bg-gray-100': index !== activeIndex,
                  },
                  selectedValues.includes(option) && 'opacity-50'
                )}
              >
                <span>{option}</span>
                {selectedValues.includes(option) && (
                  <SvgCheck className="size-4 text-blue-500" />
                )}
              </div>
            ))
          ) : (
            <div className="p-4 text-red-500">
              해당 툴은 검색된 결과가 없습니다.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
