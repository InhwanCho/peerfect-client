import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={16} height={2} x={4} y={5} fill="#111" rx={1} />
    <rect width={16} height={2} x={4} y={11} fill="#111" rx={1} />
    <rect width={16} height={2} x={4} y={17} fill="#111" rx={1} />
  </svg>
);
export default SvgMenu;
