"use client";

import { Button } from "@/components/common";
import { FaqCircle, Reply } from "@/components/icons";
import Image from "next/image";
import { Toggle } from "@/components/common";

type SubscriptionCardProps = {
  name: string;
  logoUrl: string;
  isOwner?: boolean;
  checked?: boolean;
  onToggleChange?: (checked: boolean) => void;
};
const SubscriptionSettingCard: React.FC<SubscriptionCardProps> = ({
  name,
  logoUrl,
  isOwner,
  checked,
  onToggleChange,
}) => {
  return (
    <div className="bg-primitives-white_10 flex w-full flex-row flex-wrap items-center justify-between gap-4 rounded-3xl px-4 py-4 sm:px-5">
      <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-start">
        <div className="flex items-center gap-3">
          <Image
            src={logoUrl}
            alt={name}
            width={64}
            height={64}
            className="drop-shadow-icon-md"
          />
          <h5 className="font-cinzel text-base leading-[120%]! font-bold tracking-[.2px] text-white uppercase sm:text-xl">
            {name}
          </h5>
        </div>
        <div className="flex items-center gap-3">
          <Button
            icon={<FaqCircle size={20} />}
            className="bg-primitives-white_10 border-primitives-white_10 h-9 min-h-9 w-9 shrink-0 rounded-full border p-2 backdrop-blur-xs"
          />

          {isOwner && (
            <Button
              icon={<Reply size={20} />}
              className="bg-primitives-white_10 border-primitives-white_10 h-9 min-h-9 w-9 rotate-360 rounded-full border p-2 backdrop-blur-xs"
            />
          )}
        </div>
      </div>

      <div className="flex w-full items-center gap-3 sm:w-auto">
        {isOwner ? (
          <Toggle
            label="Private"
            leftLabel="Public"
            checked={checked}
            onChange={onToggleChange}
            className="gap-x-2.5"
          />
        ) : (
          <Button title="Contact Owner" type="button" variant="secondary" />
        )}
      </div>
    </div>
  );
};

export default SubscriptionSettingCard;
