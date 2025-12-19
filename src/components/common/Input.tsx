"use client";

import { cn } from "@/utils";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  withLabel?: boolean;
  withError?: boolean;
  labelTitle?: string;
  errorTitle?: string;
}

export default function Input({
  id,
  withLabel = false,
  withError = false,
  labelTitle = "",
  className = "",
  errorTitle = "",
  ...props
}: InputProps) {
  return (
    <div className={cn("flex w-full flex-col", withLabel && "gap-y-1.5")}>
      {withLabel && (
        <label
          htmlFor={id}
          className="font-inter text-[10px] leading-[140%] font-normal tracking-[.1px] text-white sm:text-xs sm:tracking-[.12px]"
        >
          {labelTitle}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "bg-black-normal font-inter text-grey-light placeholder:text-grey-input focus:border-green-normal border-primitives-white_20 w-full rounded-full border px-[18px] py-3.5 text-xs leading-[140%] tracking-[.12px] focus:outline-none sm:text-base sm:tracking-[.16px]",
          withError && "border-red-error",
          className,
        )}
        {...props}
      />
      {withError && (
        <span className="font-inter text-red-error text-base font-normal">
          {errorTitle}
        </span>
      )}
    </div>
  );
}
