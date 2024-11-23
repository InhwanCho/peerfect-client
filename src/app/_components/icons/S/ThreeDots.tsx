import * as React from "react";
import type { SVGProps } from "react";
const SvgThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M4.125 9.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m4.935.022a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m6.052-1.065a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThreeDots;
