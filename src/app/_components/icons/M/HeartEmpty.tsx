import { SvgProps } from "@/app/_components/icons/types/svg-type";

const SvgHeartEmpty = ({ props, className, filledColor = "#1A171B" }: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={filledColor}
      d="M11.674 21.081c-.92 0-1.78-.4-2.37-1.11l-5.85-6.98a6.265 6.265 0 0 1-.4-7.49l.02-.04a5.5 5.5 0 0 1 4.52-2.46c1.59-.03 3.01.56 4.08 1.65a5.6 5.6 0 0 1 3.96-1.65h.03c1.84 0 3.51.88 4.56 2.4 1.59 2.3 1.46 5.4-.33 7.55l-5.84 7.01c-.59.71-1.46 1.11-2.38 1.11zm-3.96-16.08h-.07c-1.18.02-2.24.6-2.9 1.58l-.03.04a4.25 4.25 0 0 0 .27 5.09l5.85 6.98c.21.25.51.39.84.39s.63-.14.84-.39l5.84-7.01a4.25 4.25 0 0 0 .23-5.13 3.56 3.56 0 0 0-2.93-1.54h-.02c-1.18 0-2.24.55-2.92 1.51l-.08.11c-.22.31-.57.49-.95.5-.37.02-.74-.18-.96-.48l-.12-.17a3.55 3.55 0 0 0-2.89-1.47z"
    />
  </svg>
);
export default SvgHeartEmpty;
