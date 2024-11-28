
import { cn } from "../../../../lib/utils";
import { SvgProps } from "../types/svg-type";
const SvgArrowDown = ({ className, props, isOpen, filledColor = "#000" }: SvgProps) => (
  <svg
    className={cn(`transform transition-all ${isOpen ? "rotate-180" : "rotate-0"}`, className)}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill={filledColor}
      d="M9.144 12.654a.73.73 0 0 1-.518-.21L2.56 6.669a.74.74 0 0 1-.023-1.058.747.747 0 0 1 1.058-.022l5.535 5.272 5.317-5.317A.747.747 0 1 1 15.504 6.6l-5.835 5.835a.73.73 0 0 1-.533.218z"
    />
  </svg>
);
export default SvgArrowDown;
