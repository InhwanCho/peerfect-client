import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHalfFilledStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#half_filled_star_svg__a)">
      <path
        fill="#fff"
        d="m13.82 9.51-1.45-2.94v9.95l.09.03 3.65 1.92-.7-4.06c-.06-.32.05-.66.29-.88l2.95-2.88-4.08-.59a.98.98 0 0 1-.75-.55"
      />
      <path
        fill="#1A171B"
        d="M21.76 9.64a1 1 0 0 0-.81-.68l-5.57-.81-2.49-5.04c-.34-.68-1.46-.68-1.79 0L8.61 8.15l-5.56.81c-.38.05-.69.32-.81.68s-.02.76.25 1.03l4.03 3.93-.95 5.54c-.06.38.09.75.4.98s.72.25 1.05.08L12 18.58l4.98 2.62a.99.99 0 0 0 1.05-.07c.31-.22.46-.6.4-.98l-.95-5.54 4.03-3.93c.27-.27.37-.66.25-1.02zm-6.06 3.89a1 1 0 0 0-.29.88l.7 4.06-3.65-1.92-.09-.03V6.57l1.45 2.94c.15.29.43.5.75.55l4.08.59z"
      />
    </g>
    <defs>
      <clipPath id="half_filled_star_svg__a">
        <path fill="#fff" d="M2.19 2.6H21.8v18.71H2.19z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHalfFilledStar;
