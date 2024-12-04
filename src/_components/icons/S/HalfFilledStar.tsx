import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalfFilledStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <g clipPath="url(#half_filled_star_svg__a)">
      <path
        fill="#fff"
        d="M10.365 7.133 9.277 4.928v7.462l.068.023 2.737 1.44-.525-3.045a.72.72 0 0 1 .218-.66l2.212-2.16-3.06-.443a.73.73 0 0 1-.562-.412"
      />
      <path
        fill="#1A171B"
        d="M16.32 7.23a.75.75 0 0 0-.607-.51l-4.178-.608-1.867-3.78c-.255-.51-1.095-.51-1.343 0l-1.867 3.78-4.17.607a.75.75 0 0 0-.608.51c-.09.27-.015.57.188.773l3.022 2.947-.712 4.155a.76.76 0 0 0 .3.735c.232.173.54.188.787.06L9 13.934l3.735 1.965a.74.74 0 0 0 .788-.052.75.75 0 0 0 .3-.735l-.713-4.155 3.023-2.948a.75.75 0 0 0 .187-.765zm-4.545 2.917a.75.75 0 0 0-.217.66l.525 3.045-2.738-1.44-.067-.023V4.927l1.087 2.205a.78.78 0 0 0 .563.412l3.06.443z"
      />
    </g>
    <defs>
      <clipPath id="half_filled_star_svg__a">
        <path fill="#fff" d="M1.643 1.95H16.35v14.032H1.643z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHalfFilledStar;
