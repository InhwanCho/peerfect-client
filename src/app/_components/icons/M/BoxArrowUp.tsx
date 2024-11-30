import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBoxArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.21 21.998H6.79c-2.64 0-4.79-2.15-4.79-4.79v-4.21c0-.55.45-1 1-1s1 .45 1 1v4.21c0 1.54 1.25 2.79 2.79 2.79h10.42c1.54 0 2.79-1.25 2.79-2.79v-4.21c0-.55.45-1 1-1s1 .45 1 1v4.21c0 2.64-2.15 4.79-4.79 4.79M7 9.998c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l5-5a.996.996 0 1 1 1.41 1.41l-5 5c-.2.2-.45.29-.71.29z"
    />
    <path
      fill="#1A171B"
      d="M12 16.739c-.55 0-1-.45-1-1V3.999c0-.4.24-.77.62-.92.38-.16.8-.07 1.09.22l5 5a.996.996 0 1 1-1.41 1.41l-3.29-3.29v9.32c0 .55-.45 1-1 1z"
    />
  </svg>
);
export default SvgBoxArrowUp;
