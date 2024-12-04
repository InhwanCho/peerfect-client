import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.58.03a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.07-1.42a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThreeDots;
