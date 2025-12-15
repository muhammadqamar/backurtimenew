import type { SVGProps } from "react";
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12.408 4.233A8.4 8.4 0 0 0 10 3.875 7.223 7.223 0 0 0 2.775 11.1a7.225 7.225 0 1 0 13.233-4.008M13.442 4.433l-2.409-2.766M13.442 4.433l-2.809 2.05"
    />
  </svg>
);
export default SvgRefresh;
