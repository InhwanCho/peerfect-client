import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.5 11.283c.18.16.39.24.61.24.24 0 .48-.09.65-.28l4.219-4.526L18 8.902c.01.49.4.88.89.88h.01c.49-.01.88-.41.88-.9l-.04-4a.89.89 0 0 0-.89-.88h-.332a1 1 0 0 0-.119 0H14.85c-.49 0-.89.4-.89.89s.4.89.89.89h1.563l-3.953 4.241c-.34.36-.32.93.04 1.26m6.39 8.53h-14c-.49 0-.89-.4-.89-.89V4.933c0-.49.4-.89.89-.89h6.96c.49 0 .89.4.89.89s-.4.89-.89.89H5.77v12.22h12.22v-6.15c0-.49.4-.89.89-.89s.89.4.89.89v7.04c0 .49-.4.89-.89.89z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSquareArrowRight;
