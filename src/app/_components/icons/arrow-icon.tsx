import React from "react";

interface ArrowIconProps {
  isOpen: boolean;
  color?: string;
}

export default function ArrowIcon({ isOpen, color = "#FFFFFF" }: ArrowIconProps) {
  return (
    <svg
      className={`transform transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" />
    </svg>
  );
}
