import { SvgProps } from '../types/svg-type';
const SvgX = ({ className, props, filledColor = '#000' }: SvgProps) => (
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
      d="M18.247 19.593c.2.19.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-6.109-6.144 6.448-6.295c.4-.38.41-1.01.02-1.41a.996.996 0 0 0-1.41-.02l-6.464 6.31-6.295-6.331a.996.996 0 1 0-1.41 1.41l6.276 6.317-6.417 6.264a.987.987 0 0 0-.02 1.41c.2.2.46.3.72.3v-.01c.25 0 .51-.09.7-.28l6.423-6.27z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgX;
