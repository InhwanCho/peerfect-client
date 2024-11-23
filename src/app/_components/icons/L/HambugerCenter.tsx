import * as React from "react";
import type { SVGProps } from "react";
const SvgHambugerCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5 7.5h20c.688 0 1.25-.562 1.25-1.25S25.688 5 25 5H5c-.687 0-1.25.563-1.25 1.25S4.313 7.5 5 7.5M5 25h20c.688 0 1.25-.562 1.25-1.25S25.688 22.5 25 22.5H5c-.687 0-1.25.563-1.25 1.25S4.313 25 5 25m16.25-11.902H8.75c-.687 0-1.25-.562-1.25-1.25s.563-1.25 1.25-1.25h12.5c.688 0 1.25.563 1.25 1.25s-.562 1.25-1.25 1.25M8.75 19.05h12.5c.688 0 1.25-.562 1.25-1.25s-.562-1.25-1.25-1.25H8.75c-.687 0-1.25.563-1.25 1.25s.563 1.25 1.25 1.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHambugerCenter;
