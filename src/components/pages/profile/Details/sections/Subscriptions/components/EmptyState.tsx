"use client";

import { Button } from "@/components/common";
import { cn } from "@/utils";
import Image from "next/image";
import { ReactEventHandler } from "react";

interface TypeProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  onClick?: ReactEventHandler;
  className?: string;
}

export default function EmptyState({
  heading,
  text,
  buttonText,
  onClick,
  className,
}: TypeProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-6",
        className,
      )}
    >
      <Image
        src="/pages/profile/empty_state.png"
        alt="subscriptions empty state"
        width={120}
        height={120}
      />
      <div
        datatype="content"
        className="flex flex-col items-center justify-center gap-y-3"
      >
        {heading && (
          <h2 className="font-inter text-xl font-medium text-white">
            {heading}
          </h2>
        )}
        {text && (
          <p className="text-grey-light font-inter text-base leading-[150%] font-normal">
            {text}
          </p>
        )}
      </div>
      {buttonText && (
        <Button
          title={buttonText}
          withBackgoundImage
          backgroundImageUrl="/components/button_bg_286_48.svg"
          withTextDecoration
          className="font-cinzel h-12 w-[286px] self-center text-[18px] font-bold text-white"
          onClick={onClick}
        />
      )}
    </div>
  );
}
