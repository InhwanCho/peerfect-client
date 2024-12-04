import { SvgProps } from '../types/svg-type';
const SvgArrowLeft = ({ className, props, filledColor = '#000' }: SvgProps) => (
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
      d="M15.881 20.967c-.26 0-.51-.1-.71-.29l-7.78-7.78c-.38-.38-.39-1-.02-1.4l7.71-8.09a.996.996 0 0 1 1.41-.03c.4.38.42 1.01.03 1.41l-7.03 7.38 7.09 7.09a.996.996 0 0 1-.71 1.7z"
    />
  </svg>
);
export default SvgArrowLeft;
