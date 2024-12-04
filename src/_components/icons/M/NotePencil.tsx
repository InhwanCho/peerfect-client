import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotePencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.22 22.039H6.78c-2.64 0-4.78-2.15-4.78-4.78v-8.43a4.78 4.78 0 0 1 4.78-4.78h8.44c2.64 0 4.78 2.15 4.78 4.78v8.44c0 2.64-2.15 4.78-4.78 4.78zm-8.44-16C5.25 6.039 4 7.289 4 8.819v8.44c0 1.53 1.25 2.78 2.78 2.78h8.44c1.53 0 2.78-1.25 2.78-2.78v-8.43c0-1.53-1.25-2.78-2.78-2.78H6.78z"
    />
    <path
      fill="#000"
      d="M8.92 16.119c-.28 0-.54-.12-.74-.32-.21-.23-.31-.56-.25-.87l.67-3.44c.04-.19.13-.37.27-.51.36-.37 7.95-8.09 7.95-8.09 1.16-1.19 3.2-1.18 4.36 0a3.145 3.145 0 0 1 0 4.39l-8.01 8.16c-.16.17-.38.27-.6.29l-3.54.39zm1.59-3.95-.35 1.81 1.84-.2 7.76-7.9c.43-.44.43-1.15 0-1.59-.4-.41-1.1-.41-1.51 0 0 0-6.44 6.56-7.74 7.88"
    />
  </svg>
);
export default SvgNotePencil;