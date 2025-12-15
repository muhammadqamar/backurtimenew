"use client";

import { cn } from "@/utils";
import { ComponentProps } from "react";

interface RadioProps extends ComponentProps<"input"> {
  label?: string;
}

export default function Radio({ label, className, id, ...props }: RadioProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex w-fit cursor-pointer items-center gap-x-[18px]",
        className,
      )}
    >
      <input id={id} type="radio" className="peer sr-only" {...props} />

      {/* <div className="after:bg-grey-light peer-checked:border-green-normal peer-checked:after:bg-green-normal relative h-6 w-[42px] shrink-0 rounded-full border border-white/20 bg-white/10 after:absolute after:top-[3px] after:left-[4px] after:h-4 after:w-4 after:rounded-full after:transition-all peer-checked:after:translate-x-full" /> */}

      <div className="size-6 cursor-pointer appearance-none rounded-full border border-white/20 bg-white/10" />

      {label && <span>{label}</span>}
    </label>
  );
}
