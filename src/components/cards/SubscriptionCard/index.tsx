import { Button } from "@/components/common";
import { Plus } from "@/components/icons";
import Image from "next/image";
import { ReactEventHandler } from "react";

type SubscriptionCardProps = {
  isButton: boolean;
  onClick?: ReactEventHandler;
  name: string;
  price: number;
};

function SubscriptionCard({
  isButton,
  onClick,
  name,
  price,
}: SubscriptionCardProps) {
  return (
    <div className="bg-primitives-white_10 shadow-dark-sm relative w-full overflow-hidden rounded-3xl px-4 py-4 sm:px-5 sm:py-5">
      <Image
        src="/pages/profile/layer.png"
        fill
        alt="layer"
        className="object-cover opacity-2"
      />
      <div className="mb-1 flex w-full flex-wrap items-center justify-between gap-2">
        <h4 className="font-inter text-2xl leading-[135%] font-semibold text-white">
          € {price.toFixed(2)}
        </h4>

        {isButton && (
          <Button
            onClick={onClick}
            title="Add your debit date"
            icon={<Plus size={16} className="[&>path]:stroke-white!" />}
            className="font-inter min-h-0 w-fit gap-1.5 p-0 text-xs leading-[120%] font-semibold tracking-[.12px]"
          />
        )}
      </div>

      <p className="text-grey-light font-inter text-base leading-[140%] font-normal tracking-[.16px]">
        {name}
      </p>
    </div>
  );
}

export default SubscriptionCard;
