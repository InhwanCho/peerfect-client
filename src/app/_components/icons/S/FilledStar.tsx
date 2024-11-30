import { SvgProps } from '../types/svg-type';
const SvgFilledStar = ({
  className,
  props,
  filledColor = '#1A171B',
}: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#filled_star_svg__a)">
      <path
        fill={filledColor}
        d="M16.312 7.237a.75.75 0 0 0-.607-.51l-4.178-.608L9.66 2.332c-.255-.51-1.095-.51-1.343 0L6.45 6.112l-4.178.607a.748.748 0 0 0-.42 1.275l3.023 2.948-.713 4.155a.76.76 0 0 0 .3.735.747.747 0 0 0 .795.053l3.735-1.966 3.735 1.965a.73.73 0 0 0 .788-.06.75.75 0 0 0 .3-.735l-.713-4.155 3.023-2.947a.75.75 0 0 0 .187-.765z"
      />
    </g>
    <defs>
      <clipPath id="filled_star_svg__a">
        <path fill="#fff" d="M1.635 1.95h14.707v14.032H1.635z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFilledStar;
