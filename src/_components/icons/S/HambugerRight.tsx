import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHambugerRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 4.5h12c.412 0 .75-.338.75-.75A.75.75 0 0 0 15 3H3a.75.75 0 0 0-.75.75c0 .412.337.75.75.75M3 15h12c.412 0 .75-.338.75-.75a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75c0 .412.337.75.75.75m11.94-7.08h-7.5a.75.75 0 0 1-.75-.75c0-.412.337-.75.75-.75h7.5c.412 0 .75.338.75.75 0 .413-.338.75-.75.75m-7.5 3.578h7.5c.412 0 .75-.338.75-.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75c0 .412.337.75.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHambugerRight;
