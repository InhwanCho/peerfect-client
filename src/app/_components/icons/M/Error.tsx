import * as React from "react";
import type { SVGProps } from "react";
const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={11} fill="#111" />
    <rect width={2} height={8} x={11} y={6} fill="#fff" rx={1} />
    <rect width={2} height={2} x={11} y={16} fill="#fff" rx={1} />
  </svg>
);
export default SvgError;
