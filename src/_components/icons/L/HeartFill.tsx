import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="#1A171B"
      d="m3.384 6.06-.03.06a7.96 7.96 0 0 0 .501 9.549l8.88 10.595a3.192 3.192 0 0 0 4.888 0l8.865-10.641a7.955 7.955 0 0 0 .425-9.624c-2.748-3.962-8.607-3.992-11.4-.06l-.122.167a.27.27 0 0 1-.44 0l-.197-.259c-2.854-3.885-8.698-3.78-11.385.228z"
    />
  </svg>
);
export default SvgHeartFill;
