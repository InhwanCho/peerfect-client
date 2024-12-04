import { SvgProps } from '../types/svg-type';

const SvgRight = ({ props, className, filledColor = '#FAFAFA' }: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 80 80"
    {...props}
  >
    <rect width={80} height={80} fill="#111" fillOpacity={0.2} rx={40} />
    <path
      fill={filledColor}
      d="M36.172 48.962c-.25 0-.5-.09-.69-.28a.987.987 0 0 1-.03-1.41l7.03-7.38-7.09-7.09a.996.996 0 1 1 1.41-1.41l7.78 7.78c.38.38.39 1 .02 1.4l-7.71 8.09c-.2.21-.46.31-.72.31z"
    />
  </svg>
);
export default SvgRight;
