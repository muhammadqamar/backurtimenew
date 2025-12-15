import type { SVGProps } from "react";
const SvgAdds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.584 10V8.767c0-1.592 1.125-2.234 2.5-1.442l1.066.617 1.067.616c1.375.792 1.375 2.092 0 2.884l-1.067.616-1.066.617c-1.375.792-2.5.142-2.5-1.442z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666"
    />
  </svg>
);
export default SvgAdds;
