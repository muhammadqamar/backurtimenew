import type { SVGProps } from "react";
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#time_svg__a)">
      <path
        fill="#fff"
        d="M6.875 19.414h6.25c0-1.726-3.125-3.125-3.125-3.125s-3.125 1.4-3.125 3.125"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.2}
        d="M10 10a4.7 4.7 0 0 1 2.394-2.234l1.073-.448a3.25 3.25 0 0 0 2.002-3.002c0-.888-.353-1.739-.98-2.367L13.125.586h-6.25L5.512 1.949a3.35 3.35 0 0 0-.98 2.367c0 1.313.789 2.497 2 3.002l1.074.448A4.7 4.7 0 0 1 10 10m0 0a4.7 4.7 0 0 0 2.394 2.234l1.073.448a3.25 3.25 0 0 1 2.002 3.002c0 .888-.353 1.739-.98 2.367l-1.364 1.363M10 10a4.7 4.7 0 0 1-2.394 2.234l-1.073.448a3.25 3.25 0 0 0-2.002 3.002c0 .888.353 1.739.98 2.367l1.364 1.363m0 0h6.25m-6.25 0C6.875 17.688 10 16.29 10 16.29s3.125 1.4 3.125 3.125"
      />
    </g>
    <defs>
      <clipPath id="time_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTime;
