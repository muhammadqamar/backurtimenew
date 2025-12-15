import type { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
const SvgClan = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#DCDCDC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={22.926}
      strokeWidth={1.5}
      clipPath="url(#clan_svg__a)"
    >
      <path d="M3.682 3.375h16.943" />
      <path
        d="M5.186 3.375h13.628v15.344L12 22.055l-6.814-3.336z"
        clipRule="evenodd"
      />
      <path d="M2.225 4.777a1.43 1.43 0 1 0-.56-2.804 1.43 1.43 0 0 0 .56 2.804M23.293 4.09a1.43 1.43 0 1 0-2.476-1.429 1.43 1.43 0 0 0 2.476 1.43" />
    </g>
    <defs>
      <clipPath id="clan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClan;
