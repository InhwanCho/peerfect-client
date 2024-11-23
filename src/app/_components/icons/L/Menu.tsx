import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <rect width={18} height={2} x={6} y={8} fill="#111" rx={1} />
    <rect width={18} height={2} x={6} y={14} fill="#111" rx={1} />
    <rect width={18} height={2} x={6} y={20} fill="#111" rx={1} />
  </svg>
);
export default SvgMenu;
