import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBoxArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.908 16.499H5.093A3.6 3.6 0 0 1 1.5 12.906V9.749c0-.413.337-.75.75-.75s.75.337.75.75v3.157c0 1.155.938 2.092 2.093 2.092h7.815A2.093 2.093 0 0 0 15 12.907V9.749c0-.413.338-.75.75-.75.413 0 .75.337.75.75v3.157a3.6 3.6 0 0 1-3.592 3.592M5.25 7.499a.747.747 0 0 1-.533-1.275l3.75-3.75A.747.747 0 1 1 9.526 3.53l-3.75 3.75a.74.74 0 0 1-.532.218z"
    />
    <path
      fill="#1A171B"
      d="M9 12.554a.75.75 0 0 1-.75-.75V2.999c0-.3.18-.578.465-.69.285-.12.6-.053.818.165l3.75 3.75a.747.747 0 1 1-1.058 1.057L9.758 4.814v6.99c0 .412-.338.75-.75.75z"
    />
  </svg>
);
export default SvgBoxArrowUp;
