import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#1C1A1E"
      fillRule="evenodd"
      d="M1.5 7.875c0 3.51 2.858 6.375 6.375 6.375a6.35 6.35 0 0 0 3.943-1.367l3.25 3.25c.15.142.337.217.532.217h-.007a.747.747 0 0 0 .533-1.275l-3.25-3.249a6.35 6.35 0 0 0 1.374-3.951A6.38 6.38 0 0 0 7.875 1.5C4.358 1.5 1.5 4.365 1.5 7.875m1.5 0A4.884 4.884 0 0 1 7.875 3a4.884 4.884 0 0 1 4.875 4.875 4.884 4.884 0 0 1-4.875 4.875A4.884 4.884 0 0 1 3 7.875"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
