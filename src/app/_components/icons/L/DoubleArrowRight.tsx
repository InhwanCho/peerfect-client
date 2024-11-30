import { SvgProps } from '../types/svg-type';
const SvgDoubleArrowRight = ({
  className,
  props,
  filledColor = '#000',
}: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill={filledColor}
      fillRule="evenodd"
      d="M13.857 23.458c.238.25.563.375.888.375v.012c.312 0 .637-.125.875-.362l7.562-7.488a1.25 1.25 0 0 0 .375-.887c0-.338-.137-.65-.375-.888l-7.675-7.6a1.234 1.234 0 0 0-1.762 0 1.234 1.234 0 0 0 0 1.763l6.775 6.712-6.663 6.6a1.256 1.256 0 0 0 0 1.763m-7.124 0c.237.25.562.375.887.375v.012c.313 0 .638-.125.875-.362l7.563-7.488a1.25 1.25 0 0 0 .375-.887c0-.338-.138-.65-.375-.888l-7.675-7.6a1.234 1.234 0 0 0-1.763 0 1.234 1.234 0 0 0 0 1.763l6.775 6.712-6.662 6.6a1.256 1.256 0 0 0 0 1.763"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoubleArrowRight;
