import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M7.468 8.6a3.38 3.38 0 0 1-1.783-2.975A3.38 3.38 0 0 1 9.06 2.25a3.38 3.38 0 0 1 3.375 3.375 3.38 3.38 0 0 1-1.807 2.988 6.01 6.01 0 0 1 5.122 5.936.74.74 0 0 1-.525.712l-.465.15c-1.883.6-3.817.9-5.752.9-1.905 0-3.803-.292-5.655-.87l-.578-.18a.75.75 0 0 1-.525-.712 6.01 6.01 0 0 1 5.218-5.95m-.283-2.975a1.876 1.876 0 1 1 3.751.001 1.876 1.876 0 0 1-3.75-.001m-3.383 8.384H3.78a4.514 4.514 0 0 1 4.47-3.96h1.5c2.303 0 4.2 1.732 4.47 3.96a17.27 17.27 0 0 1-10.418 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPerson;
