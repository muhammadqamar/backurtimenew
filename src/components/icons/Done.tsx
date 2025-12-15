import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const SvgDone = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M20 7L14.6093 13.4688C12.4732 16.0322 11.4051 17.3139 10 17.3139C8.59488 17.3139 7.52681 16.0322 5.39067 13.4688L4 11.8"
      stroke="#DCDCDC"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
export default SvgDone;
