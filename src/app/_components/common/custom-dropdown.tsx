interface CustomDropdownProps {
  label: string;
  options: string[];
  selectedValue: string | null;
  dropdownType: string;
  handleDropdownToggle: (dropdown: string) => void;
  handleSelect: (type: string, value: string) => void;
  openDropdown: string | null;
}

export function CustomDropdown({
  label,
  options,
  selectedValue,
  dropdownType,
  handleDropdownToggle,
  handleSelect,
  openDropdown,
}: CustomDropdownProps) {
  return (
    <div className="flex flex-col">
      <p className="text-gray-700 text-buttonM">{label}</p>
      <div className="relative w-[200px] mt-2">
        <div
          className={`flex h-[44px] cursor-pointer items-center justify-between rounded-2xl border px-3 text-sm ${
            selectedValue
              ? 'border-main-primary text-black'
              : 'border-gray-400 text-gray-400'
          }`}
          onClick={() => handleDropdownToggle(dropdownType)}
        >
          <span>{selectedValue || `${label} 선택`}</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${
              openDropdown === dropdownType ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        {openDropdown === dropdownType && (
          <ul className="absolute top-[50px] select-none z-10 max-h-[290px] w-full overflow-auto rounded-2xl bg-white shadow-lg">
            {options.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleSelect(dropdownType, item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}