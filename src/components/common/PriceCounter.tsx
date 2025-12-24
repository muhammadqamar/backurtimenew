import React from "react";
import Button from "./Button";
import { Minus, Plus } from "../icons";
import { cn } from "@/lib/utils";

type PriceCounterProps = {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  initialValue?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
};

const PriceCounter: React.FC<PriceCounterProps> = ({
  value,
  min = 0,
  max = Infinity,
  step = 1,
  disabled = false,
  onChange,
  className,
}) => {
  const increment = () => {
    if (value + step <= max) onChange(value + step);
  };

  const decrement = () => {
    if (value - step >= min) onChange(value - step);
  };

  return (
    <div
      className={cn(
        "flex w-max shrink-0 items-center gap-1 rounded-full",
        className,
      )}
    >
      <Button
        onClick={decrement}
        disabled={disabled || value <= min}
        className="bg-primitives-white_10 flex h-7 min-h-7 w-7 min-w-7 shrink-0 items-center justify-center rounded-full p-[7px]"
        icon={<Minus size={14} className="&>path]:stroke-white!" />}
      />

      <div className="font-inter text-black-normal flex h-7 min-w-7 items-center justify-center rounded-full bg-white p-1 text-base leading-[140%] font-semibold">
        {value}
      </div>

      <Button
        onClick={increment}
        disabled={disabled || value >= max}
        className="bg-primitives-white_10 flex h-7 min-h-7 w-7 min-w-7 shrink-0 items-center justify-center rounded-full p-[7px]"
        icon={<Plus size={14} className="&>path]:stroke-white!" />}
      />
    </div>
  );
};

export default PriceCounter;
