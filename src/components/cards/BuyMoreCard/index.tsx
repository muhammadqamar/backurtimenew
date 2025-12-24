import { Button } from "@/components/common";
import Image from "next/image";
import { cn } from "@/utils";

interface BuyMoreCardProps {
  iconSrc: string;
  keyValue: string | number;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const BuyMoreCard = ({
  iconSrc,
  keyValue,
  buttonText,
  onButtonClick,
  className,
}: BuyMoreCardProps) => {
  return (
    <div
      className={cn(
        "bg-primitives-white_10 border-primitives-white_10 relative flex w-full flex-col items-start gap-4 overflow-hidden rounded-[42px] border p-2 sm:p-1",
        className,
      )}
    >
      <div className="absolute -top-[116px] left-1/2 hidden h-[137px] w-[276px] -translate-x-1/2 rounded-[276px] bg-[linear-gradient(90deg,#FFF8C1_-0.05%,#C2E8FD_-0.04%,#909090_31.2%,#DDD_75.92%,#E3E3E3_100.02%)] opacity-[.5] filter-[blur(68.05000305175781px)] sm:block" />
      <div className="bg-primitives-white_10 relative z-2 flex h-[100px] w-full items-center justify-center overflow-hidden rounded-[38px] sm:h-[131px]">
        <Image
          src="/pages/profile/layer.png"
          fill
          alt="layer"
          className="object-cover opacity-10"
        />

        <div className="relative flex flex-col items-center justify-center gap-1">
          <Image
            src={iconSrc}
            alt="buy-more-card"
            width={40}
            height={40}
            className="drop-shadow-key-gold object-contain"
          />
          <span className="font-cinzel text-center text-[20px] leading-[120%] font-bold text-white uppercase sm:text-2xl sm:tracking-[0.24px]">
            {keyValue}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-center px-5 pb-3 sm:px-4">
        <Button
          variant="secondary"
          title={buttonText}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default BuyMoreCard;
