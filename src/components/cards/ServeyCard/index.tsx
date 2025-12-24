import React from "react";
import { cn } from "@/lib/utils";
import { StarBadge } from "@/components/common";

type ServeyCardVariant = "default" | "priced";

interface ServeyCardProps {
  variant?: ServeyCardVariant;
  price?: string;
  userLimit?: string;
  active?: boolean;
  className?: string;
}

const ServeyCard = ({
  variant = "priced",
  price = "€2.86",
  userLimit = "3 user max.",
  active = false,
  className,
}: ServeyCardProps) => {
  const isPriced = variant === "priced";

  return (
    <div
      className={cn(
        "gradient-box relative h-auto w-full rounded-3xl p-px",
        "before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:rounded-3xl",
        active &&
          "before:bg-[linear-gradient(97deg,#90D2F6_5.72%,#009FAA_38.32%,#00CDBD_84.96%,#C2E8FD_110.09%)]",
      )}
    >
      <div
        className={cn(
          "bg-dark-60 relative h-full rounded-3xl",
          active && "shadow-green-md",
          className,
        )}
      >
        <div className="flex h-full flex-col justify-between gap-7 rounded-xl px-6 py-6">
          <div>
            {/* Header */}
            <div className="flex flex-col gap-4">
              {!isPriced && <StarBadge color="green" size="large" />}

              <h5 className="font-cinzel text-base leading-[140%] font-bold tracking-[0.16px] text-white uppercase sm:text-[20px] sm:tracking-[0.2px]">
                CREATE A PUBLIC SHARE
              </h5>
            </div>

            {/* Description */}
            <p
              className={cn(
                "text-grey-light font-inter mt-6 text-[14px] leading-[140%] font-normal sm:text-base",
                isPriced && "mt-3 sm:mt-6",
              )}
            >
              The offer is visible to all users. Ideal to find co-subscribers.
            </p>
          </div>

          {/* Price */}
          {isPriced && (
            <div className="flex items-center gap-[5px]">
              <StarBadge color="green" size="medium" />

              <p className="font-inter text-grey-light flex items-center gap-[5px] text-xs leading-[140%] font-normal tracking-[0.12px] sm:text-base sm:tracking-[0.16px]">
                <span className="font-inter text-base font-semibold tracking-[0.16px] text-white sm:text-[18px] sm:tracking-[0.18px]">
                  {price}
                </span>
                / month
              </p>

              <span className="text-grey-light font-inter ml-[7px] flex items-center gap-3 text-xs leading-[140%] font-normal tracking-[0.12px] sm:text-base sm:tracking-[0.16px]">
                <span className="h-1 w-1 rounded-full bg-[#D9D9D9]" />
                {userLimit}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServeyCard;
