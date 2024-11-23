
import { SvgProps } from "../types/svg-type";
const SvgBell = ({ className, props, filledColor = "#000" }: SvgProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={filledColor}
      fillRule="evenodd"
      d="M11.028 19.565a26 26 0 0 0 1.643.003.94.94 0 0 1-.817.492.94.94 0 0 1-.826-.495m-1.583-.108a28 28 0 0 1-1.12-.137l-3.44-.49c-.71-.03-1.35-.43-1.67-1.07-.34-.66-.27-1.45.17-2.04l.94-1.29c.39-.54.6-1.17.61-1.84l.02-2.7c.03-3.8 3.14-6.89 6.94-6.89s6.94 3.11 6.94 6.94v2.62c0 .69.22 1.34.63 1.89l.94 1.25c.45.6.52 1.38.18 2.05a1.92 1.92 0 0 1-1.68 1.08l-3.41.49q-.615.088-1.234.147a2.434 2.434 0 0 1-2.407 2.094 2.43 2.43 0 0 1-2.409-2.104M6.794 9.891c.02-2.791 2.31-5.06 5.1-5.06l.01.019a5.11 5.11 0 0 1 5.101 5.1v2.62c0 1.07.36 2.13 1 2.99l.94 1.25a.1.1 0 0 1 .022.079.1.1 0 0 1-.013.04c-.03.061-.08.061-.1.061h-.13l-3.469.5c-1.168.17-2.348.25-3.528.24a23 23 0 0 1-3.122-.24l-3.5-.5h-.13c-.016 0-.05 0-.078-.03l-.023-.03c-.04-.06 0-.12 0-.12l.94-1.29c.62-.86.96-1.86.96-2.92z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBell;