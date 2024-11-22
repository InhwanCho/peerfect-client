import * as React from "react";
import type { SVGProps } from "react";
const SvgLineArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.293 20.703c.2.19.45.29.71.29l-.01-.01a.996.996 0 0 0 .71-1.7l-6.289-6.289h13.589c.55 0 1-.45 1-1s-.45-1-1-1H6.41l6.292-6.291a.996.996 0 1 0-1.41-1.41L3.314 11.27l-.053.056a.996.996 0 0 0 .031 1.377z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLineArrowLeft;
