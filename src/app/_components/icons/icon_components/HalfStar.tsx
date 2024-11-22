import * as React from "react";
import type { SVGProps } from "react";
const SvgHalfStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#1A171B"
      d="M12.84 3.996c0-.06-.03-.1-.05-.15-.05-.31-.22-.6-.53-.74a1 1 0 0 0-1.34.45l-2.49 5.04-5.57.81c-.38.05-.69.32-.81.68s-.02.76.25 1.03l4.03 3.93-.95 5.54c-.06.38.09.75.4.98.17.13.38.19.59.19.16 0 .32-.04.47-.12l5.44-2.86c.28-.15.44-.4.5-.69.03-.06.06-.13.06-.2z"
    />
  </svg>
);
export default SvgHalfStar;
