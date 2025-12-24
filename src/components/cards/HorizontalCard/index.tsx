import Image from "next/image";
import React from "react";

type HorizontalCardProps = {
  iconSrc: string;
  title: string;
  description: string;
};

const HorizontalCard = ({
  iconSrc,
  title,
  description,
}: HorizontalCardProps) => {
  return (
    <div className="bg-primitives-white_10 relative flex w-full flex-col gap-2 overflow-hidden rounded-3xl px-4 py-2 sm:flex-row sm:gap-6">
      <div className="absolute -top-[87px] left-1/2 h-[137px] w-[276px] -translate-x-1/2 rounded-[276px] bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)] opacity-[.5] filter-[blur(68.05000305175781px)] sm:hidden" />

      <Image
        src={iconSrc}
        alt="youtube-red-icon"
        width={64}
        height={64}
        className="drop-shadow-icon-md"
      />
      <div className="flex items-center">
        <p className="font-inter text-grey-light text-[14px] leading-[140%] font-normal sm:text-base">
          <span className="leading-[150%] font-semibold text-white sm:leading-[140%]">
            {title}
          </span>{" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCard;
