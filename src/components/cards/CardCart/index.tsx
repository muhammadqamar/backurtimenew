import { Button, PriceCounter } from "@/components/common";
import Image from "next/image";
import React, { useState } from "react";

type CardCartProps = {
  title: string;
  image: string;
  backgroundImage?: string;
  initialQuantity?: number;
  value: number | string;
  onDelete?: () => void;
  onQuantityChange?: (quantity: number) => void;
};

function CardCart({
  title,
  image,
  value,
  onDelete,
  onQuantityChange,
}: CardCartProps) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (val: number) => {
    setQuantity(val);
    onQuantityChange?.(val);
  };

  return (
    <div className="bg-primitives-white_10 xsm:gap-6 flex gap-3 rounded-3xl px-2 py-2">
      <div className="bg-primitives-white_10 xsm:h-[105px] xsm:w-[122px] relative z-2 flex h-[106px] w-[89px] shrink-0 overflow-hidden rounded-[20px]">
        <Image
          src="/pages/profile/layer.png"
          fill
          alt="layer"
          className="object-cover opacity-10"
        />
        <Image
          src={image}
          alt="onboarding-card-image"
          fill
          className="object-cover object-bottom"
        />
      </div>
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <h5 className="font-inter text-base leading-[135%] font-medium text-white sm:text-[20px]">
            {title}
          </h5>
          <PriceCounter
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            max={100}
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <Image
              src="/icons/clock-3d.svg"
              alt="app logo"
              width={20}
              height={20}
              className="drop-shadow-icon-sm shrink-0 object-contain"
            />
            <span className="font-cinzel text-[14px] leading-[120%]! font-bold text-white sm:text-base">
              {value}
            </span>
          </div>
          <Button
            onClick={onDelete}
            title="Delete"
            className="font-inter min-h-0 w-fit justify-start p-0 text-[14px] leading-[150%] font-semibold sm:w-full sm:justify-center sm:text-base"
          />
        </div>
      </div>
    </div>
  );
}

export default CardCart;
