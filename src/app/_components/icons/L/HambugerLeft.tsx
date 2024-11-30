import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHambugerLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.05 7.5h20c.688 0 1.25-.562 1.25-1.25S25.738 5 25.05 5h-20c-.687 0-1.25.563-1.25 1.25S4.363 7.5 5.05 7.5m0 17.5h20c.688 0 1.25-.562 1.25-1.25s-.562-1.25-1.25-1.25h-20c-.687 0-1.25.563-1.25 1.25S4.363 25 5.05 25M17.5 13.313H5c-.687 0-1.25-.562-1.25-1.25s.563-1.25 1.25-1.25h12.5c.688 0 1.25.563 1.25 1.25s-.562 1.25-1.25 1.25M5 19.275h12.5c.688 0 1.25-.563 1.25-1.25s-.562-1.25-1.25-1.25H5c-.687 0-1.25.562-1.25 1.25s.563 1.25 1.25 1.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHambugerLeft;
