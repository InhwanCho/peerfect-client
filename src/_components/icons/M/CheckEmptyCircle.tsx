import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheckEmptyCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1C1A1E"
      fillRule="evenodd"
      d="M2 12.17c0 5.61 4.56 10.17 10.17 10.17s10.17-4.56 10.17-10.17S17.77 2 12.17 2 2 6.56 2 12.17m2.34 0c0-4.32 3.51-7.83 7.83-7.83S20 7.85 20 12.17 16.49 20 12.17 20s-7.83-3.51-7.83-7.83m6.4 4.14c.21.19.48.3.76.3h.04c.29-.01.57-.14.77-.37l4.96-5.71a1.1 1.1 0 0 0-.11-1.54c-.46-.39-1.14-.34-1.54.11l-4.2 4.84-2.65-2.55a1.09 1.09 0 0 0-1.51 1.57z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckEmptyCircle;
