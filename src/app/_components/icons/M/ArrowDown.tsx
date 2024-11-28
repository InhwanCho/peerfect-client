import { cn } from "../../../../lib/utils";
import { SvgProps } from "../types/svg-type";

const SvgArrowDown = ({ className, props, isOpen, filledColor = "#000" }: SvgProps) => (
  <svg
    className={cn(`transform transition-all ${isOpen ? "rotate-180" : "rotate-0"}`, className)}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={filledColor}      
      d="M12.191 16.872c-.25 0-.5-.09-.69-.28l-8.09-7.7a.987.987 0 0 1-.03-1.41.996.996 0 0 1 1.41-.03l7.38 7.03 7.09-7.09a.996.996 0 1 1 1.41 1.41l-7.78 7.78c-.19.2-.45.29-.71.29z"
    />
  </svg>
);
export default SvgArrowDown;
