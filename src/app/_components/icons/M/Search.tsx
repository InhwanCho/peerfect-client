import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 10.5c0 4.68 3.81 8.5 8.5 8.5a8.46 8.46 0 0 0 5.257-1.823l4.333 4.333c.199.189.447.289.705.29h-.005.01-.005a.996.996 0 0 0 .705-1.7l-4.332-4.332A8.46 8.46 0 0 0 19 10.5C19 5.81 15.19 2 10.5 2S2 5.82 2 10.5m2 0C4 6.92 6.92 4 10.5 4S17 6.92 17 10.5 14.08 17 10.5 17 4 14.08 4 10.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
