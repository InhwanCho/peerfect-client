import * as React from 'react';
import type { SVGProps } from 'react';
const SvgController = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.899 5.67c.4.972 1.358 1.66 2.471 1.66v.01a2.68 2.68 0 0 0 2.476-1.672l.054.002H20c.55 0 1-.45 1-1s-.45-1-1-1H9.9l-.054.001A2.68 2.68 0 0 0 7.37 2c-1.12 0-2.083.691-2.478 1.67H4a1 1 0 0 0 0 2h.899M6.04 4.66A1.33 1.33 0 1 1 8.7 4.659a1.33 1.33 0 0 1-2.659.001M20 12.65h-.773a2.68 2.68 0 0 1-2.487 1.7 2.68 2.68 0 0 1-2.487-1.7H4c-.55 0-1-.45-1-1s.45-1 1-1h10.23q.024 0 .046.002A2.68 2.68 0 0 1 16.74 9.01c1.105 0 2.058.679 2.463 1.64H20c.55 0 1 .45 1 1s-.45 1-1 1m-5.38 6.99H20c.55 0 1-.45 1-1s-.45-1-1-1h-5.38a1 1 0 0 0-.14.01A2.68 2.68 0 0 0 12 15.97a2.68 2.68 0 0 0-2.476 1.673l-.064-.002H4c-.55 0-1 .45-1 1s.45 1 1 1h5.46l.064-.002A2.68 2.68 0 0 0 12 21.31c1.12 0 2.084-.698 2.48-1.68q.068.01.14.01m2.12-9.29a1.33 1.33 0 1 0-.001 2.659 1.33 1.33 0 0 0 0-2.66m-6.07 8.29a1.33 1.33 0 1 1 2.659 0 1.33 1.33 0 0 1-2.659 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgController;
