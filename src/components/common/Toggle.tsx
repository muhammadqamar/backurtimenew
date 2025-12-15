"use client";

import { ReactNode } from "react";

interface ToggleProps {
  label: ReactNode;
}

export default function Toggle({ label }: ToggleProps) {
  return (
    <label className="inline-flex w-fit cursor-pointer items-center gap-x-[18px]">
      <input type="checkbox" value="" className="peer sr-only shrink-0!" />
      <div className="peer after:bg-grey-light peer-checked:after:bg-green-normal peer-checked:border-green-normal relative h-6 w-[42px] shrink-0! rounded-full border border-white/20 bg-white/10 after:absolute after:start-[4px] after:top-[3px] after:h-4 after:w-4 after:rounded-full after:transition-all after:content-[''] peer-checked:after:translate-x-full" />
      {label}
    </label>
  );
}
