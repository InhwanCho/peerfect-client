import React from "react";
import { cn } from "../lib/utils";

interface ArrowIconProps {
  className?: string;
  isOpen: boolean;
  color?: string;
}

export default function ArrowIcon({ className, isOpen, color = "#FFFFFF" }: ArrowIconProps) {
  return (
    <svg
      className={cn(`transform transition-all ${isOpen ? "rotate-180" : "rotate-0"}`, className)}
width = "24"
height = "24"
viewBox = "0 0 24 24"
fill = "none"
xmlns = "http://www.w3.org/2000/svg"
  >
  <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" />
    </svg >
  );
}
