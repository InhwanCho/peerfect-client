import * as React from "react";
import type { SVGProps } from "react";
const SvgFilledStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#filled_star_svg__a)">
      <path
        fill="#1A171B"
        d="M21.75 9.65a1 1 0 0 0-.81-.68l-5.57-.81-2.49-5.05c-.34-.68-1.46-.68-1.79 0L8.6 8.15l-5.57.81a.997.997 0 0 0-.56 1.7l4.03 3.93-.95 5.54c-.06.38.09.75.4.98.17.13.38.19.59.19.16 0 .32-.04.47-.12l4.98-2.62 4.98 2.62c.33.18.75.15 1.05-.08.31-.22.46-.6.4-.98l-.95-5.54 4.03-3.93c.27-.27.37-.66.25-1.02z"
      />
    </g>
    <defs>
      <clipPath id="filled_star_svg__a">
        <path fill="#fff" d="M2.18 2.6h19.61v18.71H2.18z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFilledStar;
