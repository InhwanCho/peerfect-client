import { SvgProps } from "../types/svg-type";

const SvgArrowRight = ({ className, filledColor = "#000", props }: SvgProps) => (
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
      d="M6.13 15.721a.73.73 0 0 1-.518-.21.74.74 0 0 1-.022-1.057l5.272-5.535L5.545 3.6a.747.747 0 1 1 1.057-1.057l5.835 5.835c.285.285.293.75.015 1.05L6.67 15.496a.74.74 0 0 1-.54.233z"
    />
  </svg>
);
export default SvgArrowRight;
