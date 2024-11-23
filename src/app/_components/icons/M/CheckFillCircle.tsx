import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckFillCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#1C1A1E" d="M12.17 21.17a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
    <path
      fill="#1C1A1E"
      d="M12.17 22.34C6.56 22.34 2 17.78 2 12.17S6.57 2 12.17 2s10.17 4.56 10.17 10.17-4.56 10.17-10.17 10.17m0-18c-4.32 0-7.83 3.51-7.83 7.83S7.85 20 12.17 20 20 16.49 20 12.17s-3.51-7.83-7.83-7.83"
    />
    <path
      fill="#fff"
      d="M11.5 16.61c-.28 0-.55-.11-.76-.3l-3.48-3.35a1.09 1.09 0 0 1 1.51-1.57l2.65 2.55 4.2-4.84a1.1 1.1 0 0 1 1.54-.11c.45.39.5 1.08.11 1.54l-4.96 5.71c-.2.23-.48.36-.77.37h-.05z"
    />
  </svg>
);
export default SvgCheckFillCircle;
