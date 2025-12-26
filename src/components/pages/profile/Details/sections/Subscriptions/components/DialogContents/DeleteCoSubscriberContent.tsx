import { Button, StarBadge } from "@/components/common";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const DeleteCoSubscriberContent = () => {
  // close-stone-icon.svg
  return (
    <div
      className={cn(
        "h-[534px] w-[687px] p-8",
        "bg-cover bg-center bg-no-repeat",
        "bg-[url(/components/delete-subscriber-bg.png)]",
      )}
    >
      <div className="relative h-full w-full pt-[42px]">
        <div
          className={cn(
            "absolute top-0 left-1/2 flex h-16 w-[293px] -translate-x-1/2 items-center justify-center bg-center bg-no-repeat px-4 py-5",
            "bg-[url(/components/title-border-293.svg)]",
          )}
        >
          <p
            className={cn(
              "font-cinzel text-white-gradient relative text-[20px] leading-[120%] font-bold tracking-[1%]",
            )}
          >
            Delete co-subscriber
            <span className="text-shadow-dark-small absolute top-0 left-0 -z-1">
              Delete co-subscriber
            </span>
          </p>
        </div>
        <div className="bg-primitives-black_80 border-primitives-white_10 flex h-full w-full flex-col items-center justify-center gap-[30px] rounded-[34px] border p-11">
          <Image
            src="/icons/delete-badge.svg"
            alt="delete"
            width={120}
            height={120}
            className="object-contain"
          />
          <div className="w-full">
            <h4 className="font-inter text-center text-2xl leading-[135%] font-semibold text-white">
              Are you sure you want to make Netflix subscription public?
            </h4>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Button
              title="Remain"
              withBackgoundImage
              backgroundImageUrl="/components/button_bg_168_54.svg"
              className="font-cinzel min-w-[167px] text-[18px] leading-[122%] font-bold text-white"
            />
            <Button
              title="Delete Forever"
              className="font-inter text-base leading-[140%] font-semibold text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCoSubscriberContent;
