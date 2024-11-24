
import { SvgProps } from "../types/svg-type";
const SvgConnectionThreeDots = ({ className, props, filledColor = "#1C1A1E" }: SvgProps) => (
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
      fillRule="evenodd"
      d="M16.78 8.66c-.822 0-1.575-.3-2.155-.794L9.52 11.722a3.3 3.3 0 0 1-.036 2.01l4.682 2.72a3.34 3.34 0 0 1 2.773-1.493c1.83 0 3.33 1.5 3.33 3.33s-1.5 3.33-3.33 3.33a3.336 3.336 0 0 1-3.326-3.17l-5.322-3.094A3.3 3.3 0 0 1 6.33 16C4.49 16 3 14.5 3 12.67s1.5-3.33 3.33-3.33a3.3 3.3 0 0 1 2.067.725l5.16-3.898a3.3 3.3 0 0 1-.107-.837c0-1.83 1.5-3.33 3.33-3.33s3.33 1.5 3.33 3.33-1.5 3.33-3.33 3.33m0-5c-.92 0-1.67.75-1.67 1.67S15.86 7 16.78 7s1.67-.75 1.67-1.67-.75-1.67-1.67-1.67M6.33 11c-.92 0-1.67.75-1.67 1.67s.75 1.67 1.67 1.67S8 13.59 8 12.67 7.25 11 6.33 11m8.94 7.289c0-.92.75-1.67 1.67-1.67s1.67.75 1.67 1.67-.75 1.67-1.67 1.67-1.67-.75-1.67-1.67"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgConnectionThreeDots;
