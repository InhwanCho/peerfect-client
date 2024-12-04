import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.102 16.871c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l7.78-7.78c.38-.38 1-.39 1.4-.02l8.09 7.71c.4.38.42 1.01.03 1.41-.38.4-1.01.42-1.41.03l-7.38-7.03-7.09 7.09c-.2.2-.45.29-.71.29"
    />
  </svg>
);
export default SvgArrowUp;
