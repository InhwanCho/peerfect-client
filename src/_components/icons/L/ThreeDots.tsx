import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThreeDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M6.875 16.25a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75m8.225.037a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75m10.088-1.775a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgThreeDots;
