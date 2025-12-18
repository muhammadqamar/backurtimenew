import React from "react";
import Image from "next/image";
import { cn } from "@/utils";

const WoodenCard = ({
  icon,
  TotalMembers,
  small,
  label,
}: {
  icon?: string;
  TotalMembers?: number | string;
  small?: boolean;
  label?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[104px] w-[254px] items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-5",
        small && "min-h-16! gap-1! px-3! py-2.5!",
      )}
    >
      <Image
        src={
          small
            ? "/components/wooden-card-mobile.svg"
            : "/components/wooden-card.svg"
        }
        alt="app logo"
        fill
        className="object-contain"
      />
      <Image
        src={icon ?? "/icons/bonus-card.svg"}
        alt="app logo"
        width={small ? 32 : 64}
        height={small ? 32 : 64}
        className={cn(
          "drop-shadow-icon-sm relative z-1 shrink-0 object-contain",
          small ? "size-8!" : "size-8! sm:size-16!",
        )}
      />

      <div
        className={cn(
          "relative z-1 flex w-full flex-col gap-0 sm:gap-1",
          small && "gap-0!",
        )}
      >
        <span
          className={cn(
            "font-cinzel text-[20px] leading-[120%]! font-bold tracking-[.2px] text-white uppercase sm:text-2xl sm:tracking-[.24px]",
            small && "text-[20px]! tracking-[.2px]!",
          )}
        >
          {TotalMembers}
        </span>
        <p
          className={cn(
            "font-inter leafing-[140%]! text-grey-light! text-sm font-normal sm:text-base",
            small && "text-sm!",
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default WoodenCard;
