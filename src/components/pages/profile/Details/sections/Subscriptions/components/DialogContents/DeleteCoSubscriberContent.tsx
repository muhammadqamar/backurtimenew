import { Button, StarBadge } from "@/components/common";
import { cn } from "@/utils";
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
      <div className="h-full w-full pt-[42px]">
        <div className="bg-primitives-black_80 border-primitives-white_10 flex h-full w-full flex-col items-center justify-center gap-[30px] rounded-[34px] border p-11">
          <StarBadge color="sliver" />
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
