import * as React from "react";
import type { SVGProps } from "react";
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#111"
      fillRule="evenodd"
      d="M7.547 11.53c-2.903 0-5.033 1.968-5.033 4.142 0 1.194.62 2.302 1.675 3.081l.366.27-.217 1.45 1.559-.88.287.066c.432.1.89.154 1.363.154 2.902 0 5.032-1.968 5.032-4.141s-2.13-4.142-5.032-4.142M1 15.672c0-3.238 3.055-5.656 6.547-5.656s6.546 2.418 6.546 5.656-3.054 5.656-6.546 5.656a7.6 7.6 0 0 1-1.41-.132l-2.247 1.27-.372-.66-.007-.011m.007.012.372.659a.846.846 0 0 1-1.253-.862l.289-1.923C1.756 18.674 1 17.262 1 15.67"
      clipRule="evenodd"
    />
    <path
      fill="#111"
      fillRule="evenodd"
      d="M5.453 9.883C5.453 5.448 9.467 2 14.226 2 18.987 2 23 5.448 23 9.883c0 2.103-.915 3.999-2.38 5.398l.376 3.272a.757.757 0 0 1-1.024.793l-4.365-1.678a9.8 9.8 0 0 1-2.559.027.757.757 0 0 1-.63-.98q.159-.501.16-1.043c0-2.174-2.129-4.142-5.032-4.142q-.578.001-1.117.103a.757.757 0 0 1-.887-.625 7 7 0 0 1-.089-1.125m8.773-6.369c-4.095 0-7.259 2.933-7.259 6.369l.002.155q.285-.021.577-.022c3.492 0 6.547 2.419 6.547 5.656q0 .293-.034.578a8.5 8.5 0 0 0 1.51-.107.76.76 0 0 1 .393.04l3.387 1.301-.276-2.415a.76.76 0 0 1 .256-.658c1.345-1.167 2.157-2.773 2.157-4.528 0-3.436-3.164-6.369-7.26-6.369"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChat;