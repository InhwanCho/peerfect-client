import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <path
      fill="#1C1A1E"
      fillRule="evenodd"
      d="M2.5 13.125c0 5.85 4.763 10.625 10.625 10.625 2.48 0 4.763-.852 6.572-2.28l5.416 5.417c.248.236.558.36.881.362h-.006H26h-.006a1.245 1.245 0 0 0 .881-2.125l-5.414-5.414a10.58 10.58 0 0 0 2.289-6.585C23.75 7.263 18.988 2.5 13.125 2.5 7.263 2.5 2.5 7.275 2.5 13.125m2.5 0C5 8.65 8.65 5 13.125 5s8.125 3.65 8.125 8.125-3.65 8.125-8.125 8.125S5 17.6 5 13.125"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
