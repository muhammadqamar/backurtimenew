import type { SVGProps } from "react";
const SvgGame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.417 6.667v2.5M4.167 7.917h2.5"
    />
    <path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.898 7.838a1.172 1.172 0 1 1-2.343 0 1.172 1.172 0 0 1 2.343 0Z"
    />
    <path
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4.35 3.333h11.796c1.942 0 3.516 2.886 3.516 6.446s-1.574 6.484-3.516 6.484c-1.427 0-2.654-1.56-3.203-3.802-.128-.52-.635-.886-1.17-.886h-3.05c-.536 0-1.043.366-1.17.886-.55 2.241-1.777 3.802-3.204 3.802-1.942 0-3.516-2.925-3.516-6.484S2.407 3.333 4.35 3.333Z"
    />
  </svg>
);
export default SvgGame;
