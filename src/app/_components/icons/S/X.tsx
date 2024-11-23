import { SvgProps } from "../types/svg-type";

const SvgX = ({ className, props, filledColor = "#000" }: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill={filledColor}
      fillRule="evenodd"
      d="M13.685 14.694c.15.143.338.218.533.218a.747.747 0 0 0 .533-1.275l-4.582-4.608 4.836-4.721a.74.74 0 0 0 .015-1.058.747.747 0 0 0-1.058-.015L9.114 7.968 4.393 3.22a.747.747 0 1 0-1.058 1.058l4.707 4.738-4.812 4.698a.74.74 0 0 0-.015 1.057c.15.15.345.225.54.225v-.007a.74.74 0 0 0 .525-.21l4.816-4.702z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgX;
