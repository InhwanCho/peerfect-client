import * as React from "react";
import type { SVGProps } from "react";
const SvgHalfStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#1A171B"
      d="M9.63 2.997c0-.045-.022-.075-.037-.113-.038-.232-.165-.45-.398-.555a.75.75 0 0 0-1.005.338l-1.867 3.78-4.178.607a.75.75 0 0 0-.607.51c-.09.27-.015.57.187.773l3.023 2.947-.713 4.155a.76.76 0 0 0 .3.735.747.747 0 0 0 .795.053l4.08-2.145c.21-.113.33-.3.375-.518a.35.35 0 0 0 .045-.15z"
    />
  </svg>
);
export default SvgHalfStar;
