import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHambugerLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.04 6h16c.55 0 1-.45 1-1s-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1m0 14h16c.55 0 1-.45 1-1s-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1M14 10.65H4c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1M4 15.42h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHambugerLeft;
