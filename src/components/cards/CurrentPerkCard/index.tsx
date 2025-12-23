import { Button, StarBadge } from "@/components/common";
import Image from "next/image";

type CurrentPerkCardProps = {
  title: string;
  price: string;
  expiresAt: string;
  period: string;
  showActions?: boolean;
  onChangePlan?: () => void;
  onCancel?: () => void;
};

function CurrentPerkCard({
  title,
  price,
  expiresAt,
  period,
  showActions = true,
  onChangePlan,
  onCancel,
}: CurrentPerkCardProps) {
  return (
    <div className="bg-primitives-white_10 relative w-full overflow-hidden rounded-3xl px-4 py-4 sm:px-5">
      <Image
        src="/pages/profile/layer.png"
        fill
        alt="layer"
        className="object-cover opacity-2"
      />

      <div className="flex w-full flex-col justify-between sm:flex-row">
        <div className="flex items-center gap-4">
          <StarBadge className="drop-shadow-icon-gold-lg!" />
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <p className="font-inter text-base leading-[140%] font-semibold tracking-[.16px] text-white sm:text-[18px] sm:tracking-[.18px]">
                {title}
              </p>
              <p className="ite flex gap-2">
                <span className="font-inter text-[14px] leading-[140%] font-semibold text-white sm:text-base">
                  {price}
                </span>
                <span className="font-inter text-grey-light text-[14px] leading-[140%] font-normal sm:text-base">
                  {period}
                </span>
              </p>
            </div>
            <div>
              <p className="font-inter text-grey-light text-xs leading-[140%] font-normal tracking-[.12px] sm:text-base sm:tracking-[.16px]">
                {expiresAt}
              </p>
            </div>
          </div>
        </div>
        {showActions && (
          <div className="mt-3 flex items-center gap-4">
            <Button
              title="Change plan"
              className="font-inter min-h-0 w-fit p-0 text-base leading-[140%] font-semibold text-white"
              onClick={onChangePlan}
            />
            <span className="text-primitives-white_20">|</span>
            <Button
              title="Cancel subscription"
              className="font-inter min-h-0 w-fit p-0 text-base leading-[140%] font-semibold text-white"
              onClick={onCancel}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentPerkCard;
