import type { SVGProps } from 'react';

export interface SvgProps {
  props?: SVGProps<SVGSVGElement>;
  className?: string;
  filledColor?: string;
  isOpen?: boolean;
  style?: React.CSSProperties;
}
