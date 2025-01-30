import { SvgProps } from '../types/svg-type';

const SvgCheck = ({
  className,
  props,
  filledColor = '#000',
  style,
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    style={style}
    className={className}
    {...props}
  >
    <path
      fill={filledColor}
      d="M11.126 16.546c-.26 0-.51-.1-.7-.28l-4.12-4a.987.987 0 0 1-.02-1.41.987.987 0 0 1 1.41-.02l3.33 3.23 5.01-6.29c.34-.43.97-.5 1.41-.16.43.34.5.97.16 1.41l-5.7 7.15c-.18.22-.44.36-.72.38h-.06z"
    />
  </svg>
);
export default SvgCheck;
