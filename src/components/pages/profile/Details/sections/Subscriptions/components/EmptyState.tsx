"use client";

import { Button } from "@/components/common";
import Image from "next/image";

export default function EmptyState() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-6">
      <Image
        src="/pages/profile/empty_state.png"
        alt="subscriptions empty state"
        width={120}
        height={120}
      />
      <div className="flex flex-col items-center justify-center gap-y-3">
        <span className="font-inter text-xl font-medium text-white">
          No subscriptions yet
        </span>
        <span className="text-grey-light font-inter text-base font-normal">
          Find your subscription to save up your budjet
        </span>
      </div>
      <Button
        title="Share subscription"
        withBackgoundImage
        backgroundImageUrl="/components/button_bg_286_48.svg"
        withTextDecoration
        className="font-cinzel h-12 w-[286px] self-center text-[18px] font-bold text-white"
        onClick={() => alert("In development")}
      />
    </div>
  );
}
