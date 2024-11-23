import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckEmptyCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.5 9.128a7.634 7.634 0 0 0 7.627 7.627 7.634 7.634 0 0 0 7.628-7.627c0-4.208-3.427-7.628-7.627-7.628S1.5 4.92 1.5 9.127m1.755 0a5.877 5.877 0 0 1 5.873-5.873A5.877 5.877 0 0 1 15 9.128 5.877 5.877 0 0 1 9.127 15a5.877 5.877 0 0 1-5.872-5.873m4.8 3.104c.158.143.36.225.57.225h.03a.8.8 0 0 0 .578-.277l3.72-4.283a.826.826 0 0 0-.082-1.155.826.826 0 0 0-1.155.083l-3.15 3.63-1.988-1.913A.817.817 0 0 0 5.446 9.72z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCheckEmptyCircle;
