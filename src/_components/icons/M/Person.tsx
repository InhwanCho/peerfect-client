import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.957 11.466A4.5 4.5 0 0 1 7.58 7.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5c0 1.726-.978 3.23-2.41 3.984 3.858.568 6.83 3.902 6.83 7.914 0 .44-.28.82-.7.95l-.62.2c-2.51.8-5.09 1.2-7.67 1.2-2.54 0-5.07-.39-7.54-1.16l-.77-.24a1 1 0 0 1-.7-.95c0-4.056 3.038-7.419 6.957-7.932M9.58 7.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0M5.07 18.678h-.03c.36-2.97 2.9-5.28 5.96-5.28h2c3.07 0 5.6 2.31 5.96 5.28a23.02 23.02 0 0 1-13.89 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPerson;
