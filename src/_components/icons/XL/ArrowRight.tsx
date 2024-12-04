import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 81 81"
    {...props}
  >
    <g filter="url(#arrow_right_svg__a)">
      <ellipse
        cx={41.476}
        cy={40.5}
        fill="#fff"
        fillOpacity={0.1}
        rx={39.524}
        ry={40.5}
      />
    </g>
    <path
      fill="#757575"
      d="M46.496 66.904c-.76 0-1.493-.3-2.078-.87L21.64 42.694c-1.112-1.14-1.142-3-.058-4.2l22.572-24.27c1.113-1.2 2.957-1.23 4.128-.09a3.013 3.013 0 0 1 .088 4.23l-20.582 22.14 20.758 21.27a3.04 3.04 0 0 1 0 4.23 2.84 2.84 0 0 1-2.079.87z"
    />
    <defs>
      <filter
        id="arrow_right_svg__a"
        width={147.048}
        height={149}
        x={-32.048}
        y={-34}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={17} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1_5269"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1_5269"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgArrowRight;
