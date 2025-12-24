import Image from "next/image";
import { cn } from "@/utils";
interface ShareSubscriptionItemProps {
  iconSrc: string;
  className?: string;
}

function ShareSubscriptItem({
  iconSrc,
  className,
}: ShareSubscriptionItemProps) {
  return (
    <div
      className={cn(
        "border-primitives-white_20 border-b px-6 py-3 hover:cursor-pointer hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)] sm:py-5",
        className,
      )}
    >
      <div className="bg-primitives-white_10 hover:bg-primitives-black_50 h-8 w-8 rounded-full p-1.5 sm:h-11 sm:w-11 sm:p-2">
        <Image
          src={iconSrc}
          alt="subscript-icon"
          width={28}
          height={28}
          className="size-5! object-contain sm:size-7!"
        />
      </div>
    </div>
  );
}

export default ShareSubscriptItem;
